import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Link,NavLink} from "react-router-dom";
import App from './App.js';

const Nav=()=>{
  return <ul className="nav">
    <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/">Home page</NavLink></li>
    <li className="nav-item"><Link className="nav-link" to="/aboutus">About Us</Link></li>
    <li className="nav-item"><Link className="nav-link" to="/search">Search</Link></li>
    <li className="nav-item"><Link className="nav-link" to="/contactus">Contact Us</Link></li>
    <li className="nav-item"><Link className="nav-link" to="/contactus/name">Name page</Link></li>
    </ul>
}
ReactDOM.render(
  <>
 
  <BrowserRouter> <Nav/>
  <App />
  </BrowserRouter>
  </>,
  document.getElementById('root'));