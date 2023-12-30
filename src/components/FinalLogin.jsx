import React, { useEffect, useState } from "react";
import { auth, provider } from "../firebase-config";
import { signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import "../style/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import App from "../App";

function FinalLogin() {
  const [mail, setMail] = useState("");
  const [eMail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  function signIn() {
    signInWithPopup(auth, provider).then((data) => {
      console.log(data.user.value);
      setMail(data.user.email);
      localStorage.setItem("email", data.user.value);
    });
  }

  const manualSignIn = (e) => {
    e.preventDefault();
    if (!newUser) {
      signInWithEmailAndPassword(auth, eMail, password)
        .then((userData) => {
          console.log(userData);
          setAuthenticated(true);
        })
        .catch((error) => {
          console.log("invalid");
        });
    } else {
      createUserWithEmailAndPassword(auth, eMail, password)
        .then((userData) => {
          setAuthenticated(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    setMail(localStorage.getItem("email"));
  });

  return (
    <div>
      {mail || authenticated ? (
        <App />
      ) : (
        <div className="Container">
          <div className="login">
            {newUser ? <h1>Sign Up</h1> : <h1>Login</h1>}
            <form onSubmit={manualSignIn}>
              <label htmlFor="username" style={{ display: "block" }}>
                Username
              </label>
              <input
                name="username"
                placeholder="Email or Phone"
                type="email"
                value={eMail}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label htmlFor="password" style={{ display: "block" }}>
                Password
              </label>
              <input
                name="password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button type="submit">Log In</button>
            </form>
            <p
              onClick={() => {
                setNewUser(true);
              }}
            >
              Sign Up
            </p>
            <div className="Popup">
              <div className="thirdParty" onClick={signIn}>
                <FontAwesomeIcon
                  icon={faGoogle}
                  style={{ marginRight: "10px" }}
                />
                Google
              </div>
              <div className="thirdParty">
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ marginRight: "10px" }}
                />
                Facebook
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FinalLogin;
