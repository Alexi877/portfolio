import React from 'react';
import './Home.css';
class Home extends React.Component {
	render() {
		return (
		<div className = "main" >
		 <img className = "avatar" height ="300" width = "300" src ="https://st2.depositphotos.com/2777531/6505/v/950/depositphotos_65058913-stock-illustration-hipster-man-avatar-user.jpg" alt = "main avatar"/>
			<div className = "homediv">
			<h1> Full Stack Web Developer </h1>
			<p>HTML | CSS | Javascript | React | Express | NodeJS </p>
			</div>
		</div>
			)
	}
}
export default Home;