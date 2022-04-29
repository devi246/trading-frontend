import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import FormControl from 'react-bootstrap/FormControl'
import { Link } from "react-router-dom";
import Globe from '.././Global'

class TopNavbar extends React.Component {
	constructor(props) {
		super(props)
		this.setLoggedOut = this.setLoggedOut.bind(this)
	}

	setLoggedOut() {
		localStorage.setItem('logged', 'false');
		//this.setState( {logged: false} )
		console.log("set logged out")
		this.props.logout()
	}

render() {
	return (

		<Navbar bg="light" expand="md">
		<Container fluid>
			<Navbar.Brand as={Link} to="/">HOME</Navbar.Brand>
			<Navbar.Toggle aria-controls="navbarScroll" />
			<Navbar.Collapse id="navbarScroll">



			<Nav
				className="me-auto my-2 my-lg-0"
				style={{ maxHeight: '100px' }}
				navbarScroll
			>

				<Nav.Link as={Link} to="/offers/new"><u>MAKE OFFER</u></Nav.Link>
				{/* <Nav.Link as={Link} to="wish">WISH</Nav.Link> */}
				<Nav.Link as={Link} to="offers"><u>VIEW OFFERS</u></Nav.Link>
				{/* <Nav.Link as={Link} to="users">USERS</Nav.Link> */}
				{/* <Nav.Link as={Link} to="pots">POTS</Nav.Link> */}
				

				{/*
				<Nav.Link href="#" disabled>
				Link
				</Nav.Link>
				*/}
				

			</Nav>


			<LoginBar user={this.props.user} logout={this.setLoggedOut} />


			{/*
			<NavDropdown title="More" id="navbarScrollingDropdown" align="end">
			<NavDropdown.Item as={Link} to="legal">Legal</NavDropdown.Item>
			<NavDropdown.Item as={Link} to="about">About</NavDropdown.Item>
			<NavDropdown.Divider />
			<NavDropdown.Item as={Link} to="about">Contact</NavDropdown.Item>
			</NavDropdown>
			*/}




			{/*
			<Form className="d-flex">
				<FormControl
				type="search"
				placeholder="Search"
				className="me-2"
				aria-label="Search"
				/>
				<Button variant="outline-success">Search</Button>
			</Form>
			*/}


			</Navbar.Collapse>
		</Container>
		</Navbar>

	);}
}
export default TopNavbar;



class LoginBar extends React.Component {
	constructor(props) {
		super(props)
		this.logout = this.logout.bind(this)
	}

	logout() {
		console.log("clicked logout")

        const requestOptions = {
            method: 'GET',
            headers: {},
            credentials: 'include'
		};
		fetch('http://localhost:1323/test/logout', requestOptions)
		.then(response => {
			console.log("LOGIN. response status", response.status)
			return response.text()
		})
		.then(data => {
			console.log("LOGOUT: got data", data)
			this.props.logout()
		} );
	}

	render() {
		const user = this.props.user

		console.log("LOGIN BAR user:",user)

		if (user && user != "") {
			const userName = this.props.userName
			return (

				<Nav>
					
					<Nav.Link as={Link} to={"users/"+user}>
						<u>Logged in as {user}</u>
					</Nav.Link>

					<Nav.Link onClick={this.logout}>
						<u>LOGOUT</u>
					</Nav.Link>
				</Nav>


			)
		}

		return (
			<Nav>
			<Nav.Link as={Link} to="login">
				<u>LOGIN</u>
        	</Nav.Link>
			</Nav>
		)

	}

}