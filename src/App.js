import React, { Component } from 'react'; 
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'; 
import Home from './components/Home'; 
import About from './components/About';

import Law from './components/Law';
import "./style/box.css";

class App extends Component { 
render() { 
	return ( 
	<Router> 
		<div className="header"> 
			<div className='headerContent'>
				<Link to="/" className="nav">Home</Link> 
			
				<Link to="/about" className="nav">About Us</Link> 
			
		<Routes> 
				<Route exact path='/' element={< Home />}></Route> 
				<Route exact path='/about' element={< About />}></Route>
				<Route exact path='/law' element={< Law />}></Route>
				
		</Routes> 
    </div>
		</div> 
	</Router> 
); 
} 
} 

export default App;
