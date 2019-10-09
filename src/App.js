import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.css';
import Contact from './Contact';
import Projects from './Projects';
import About from './About';
import Home from './Home';
import Navbar from './Navbar';


function App() {
  return (
<Router>
 <div>
<Navbar />
<Switch>
<Route exact path = "/" component = {Home} />
<Route path = "/about" component = {About} />
<Route path = "/projects" component = {Projects} />
<Route path = "/contact" component = {Contact} />
</Switch>

 </div>
</Router>
  );
}
export default App;
