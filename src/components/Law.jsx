import React from "react";
import { useState } from "react";
import "../style/law.css";

function Law() {
  const [query, setQuery] = useState("");
  const [output, setOutput] = useState("hello");
  const [comments, setComments] = useState([])
  function callAPI(e) {
    
    setComments(() => [...comments, {loading: true }]);
    e.preventDefault();
    const jsonQuery = JSON.stringify({ query: query });
    const url = "http://127.0.0.1:5000";
    console.log("hello");

    fetch(url, { 
        method: 'POST', body: jsonQuery,
        headers: { "Content-Type": "application/json"}})
      .then((response) => {
        return response.json();
      })
      .then((json) => {     
        console.log('e', comments)
        console.log(json, [...comments].filter(x => !x.loading));
        setComments(() => [ ...[...comments].filter(x => !x.loading), { query: json, user: false}]);
        setOutput(json);
      });
    
  }
  console.log(comments)
  return (
    <div className="container">
      <form onSubmit={callAPI} className="law-form">
        <input
          placeholder="enter prompt"
          className="prompt"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        ></input>
        <button type="submit">Enter</button>
      </form>
      <div>
        { comments.map((x, index) => {
            if ( x.loading) return <div key={index + 'loading'}> Loading.. </div>
            return <div key={index} className="answer"> {x.query}</div>
        }) }
      </div>
    </div>
  );
}

export default Law;
