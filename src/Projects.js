import React from 'react';
import facerec from './images/facerec.PNG';
import Phonestore from './images/Phonestore.PNG';
import Realstate from './images/Realstate.PNG';
import restaurant from './images/restaurant.PNG';

class Projects extends React.Component {
	constructor(props) {
		super(props);
		this.state = {activeTab: 0 };
	}

	render() {
		return (
	<div>
			<div className = "category-tabs"> 
			<h3>Projects </h3>
			</div>

			<div className = "outercard">

			 
			<a className = "card" href = "https://as-phone-store.netlify.com/" >
			<h4>Sanchez Mobile</h4>
			<div className="container">
			<img className = "projectimage" 
			src ={Phonestore}
			alt="project 1" 
			height = "300"
			width = "300"/>
			<a className="" href="https://github.com/Alexi877/store2">
			<i class="overlay fab fa-github-square"></i>
			</a>
			</div>
			<h5 className ="para" >Phone store with paypal checkout </h5>
			</a>
			
			<a className = "card" href = "https://as-realstate.herokuapp.com/" >
			<h4>House Finder</h4>
			<div className="container">
			<img className = "projectimage" 
			src ={Realstate}
			alt="project 1" 
			height = "300"
			width = "300"/>
			<a className="" href="https://github.com/Alexi877/homesearch">
			<i class="overlay fab fa-github-square"></i>
			</a>
			</div>
			<h5 className ="para" >Real state website for everyone</h5>
			</a>


			<a className = "card" href = "https://as-restaurant.herokuapp.com/" >
			<h4>Restaurant</h4>
			<div className="container">
			<img className = "projectimage" 
			src ={restaurant}
			alt="project 1" 
			height = "250"
			width = "250"/>
			<a className="" href="https://github.com/Alexi877/restaurant">
			<i class="overlay fab fa-github-square"></i>
			</a>
			</div>
			<h5 className ="para" >Restaurant with many delicious food items</h5>
			</a>


			<a className = "card" href = "https://asmartbrain.herokuapp.com/" >
			<h4>Smart Brain</h4>
			 <div className="container">
			<img className = "projectimage" 
			src ={facerec}
			alt="project 1" 
			height = "250"
			width = "250"/>
			<a className="" href="https://github.com/Alexi877/restaurant">
			<i class="overlay fab fa-github-square"></i>
			</a>
			</div>
			<h5 className ="para" >Smart Brain is a face recognition app </h5>
			</a>
			

			</div>
	</div>
			)
	}
}
export default Projects;