import React from 'react';
import {Link} from 'react-router-dom';
function Navbar() {
return (
	<div position = "static" className = "bar">
      <Link className = "links" to = "/" >Home</Link>
      <Link className = "links" to = "/about" >About</Link>
      <Link className = "links" to = "/projects" >Projects</Link>
      <Link className = "links" to = "/contact" >Contact</Link>
  </div> )
}
export default Navbar;