import './App.css';
import React, { Component } from 'react';
import Header from "./Bars/Header";
import TopNavbar from "./Bars/TopNavbar";
import Footer from "./Bars/Footer";
import Button from 'react-bootstrap/Button'

import { Outlet, Link } from "react-router-dom";

function App(props) {

  return (
    
    <div className="App">

		<Header />

		<TopNavbar logout={props.logout} user={props.user} />

		<Outlet />

		<Footer />
      
    </div>

  );
}
export default App;



class Cookies extends React.Component {
	constructor(props) {
		super(props)
		this.state = {acceptCookies:false}
	}

	render() {

		const cookie = {
			position:"fixed",
			bottom: "10px",
			right: "10px",
			width: '16rem',
			backgroundColor: "lightgrey",
			padding: '5px',
		  }

		return (
			<>
				<div style={cookie}>
				<Button variant="primary" name="cancel"  onClick={this.handleClick}>ACCEPT COOKIES</Button>{' '}
				<p>This website uses cookies</p>
				</div>
			</>
		)
	}
}