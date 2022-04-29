import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Container from 'react-bootstrap/Container'
import Globe from '../Global';
import { useNavigate, useLocation } from "react-router-dom";

const Login=(props)=> {
    // "navigation" stuff to go from one URL to another:
    const navigate = useNavigate(); // this must be done inside a "function component"
    let location = useLocation();
    const goto = () => {

        if (location.state && location.state != "") {
            navigate(location.state, { } )
        } else {
            navigate("/", {  });
        }
    }

    console.log("this logged:",props.logged)
    console.log("print:", location.state)

    return ( <LoginX goto={goto} login={props.login} /> )
}
export default Login;

class LoginX extends React.Component {
    constructor(props) {
    	super(props)
		this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = { email: "testjoe@example.com", password: "pass" }

        
        //this.props.boss["login"] = this
    }
    
	handleChange(e) {
		this.setState( { [e.target.name]: e.target.value } )
	}

    handleSubmit(e) {
        e.preventDefault();
        //console.log("submit form:", this.state)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            credentials: 'include',
            body: JSON.stringify( this.state )
		};
		fetch('http://localhost:1323/login', requestOptions)
        .then(response => {
            console.log("LOGIN. response status", response.status)
            if (response.ok) {
                return response.json()
            } else {
                console.log("LOGIN ERROR")
            }
        })
        .then(data => {
            //const topnav = localStorage.getItem('topnav');
            const user = JSON.parse(data)
            //Globe.getLoginBar().setLoggedIn(user)
            console.log("LOGIN. got data", data)

            this.props.login(user.Name)

            this.props.goto()
            
        }
        );
    }

    render() { return (
  
        <div>
  
        <Container>

        <br></br>

        <Row>
        <Col></Col>
        <Col>

        <h5 className="card-subtitle mb-2 text-muted text-start">
        LOGIN
        </h5>


        <Form onSubmit={this.handleSubmit}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.handleChange} value={this.state.email}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password}/>
        </Form.Group>


        <Button variant="primary" type="submit">
        Login
        </Button>

        </Form>

        <br></br><br></br>
        <p>You can login with the following emails:</p>
        <ul>
            <li>testjoe@example.com</li>
            <li>testmia@example.com</li>
        </ul>
        <p>Password is "pass"</p>

                
        </Col>

        <Col></Col>
        </Row>


        </Container>

        </div>

    );}
  
}
//export default Login;



class LoginTest extends React.Component {
    constructor(props) {
    	super(props)
		this.test_login = this.test_login.bind(this)
        this.test_logged = this.test_logged.bind(this)
        this.test_logout = this.test_logout.bind(this)
    }

    test_login() {
        console.log("TEST LOGIN")

        const requestOptions = {
            method: 'GET',
            headers: {},
            credentials: 'include'
		};
		fetch('http://localhost:1323/test/login', requestOptions)
			.then(response => {
				console.log("LOGIN. response status", response.status)
				return response.text()
			})
			.then(data => console.log("LOGIN. got data", data) );
    }

    test_logged() {
        console.log("TEST IF LOGGED IN")

        const requestOptions = {
            method: 'GET',
            headers: {},
            credentials: 'include'
		};
		fetch('http://localhost:1323/test/logged', requestOptions)
			.then(response => {
				console.log("LOGIN. response status", response.status)
				return response.text()
			})
			.then(data => console.log("LOGIN. got data", data) );
    }

    test_logout() {
        console.log("TEST LOGOUT")

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
			.then(data => console.log("LOGIN. got data", data) );
    }

    render() { return (

        <div>

        <Row>
            <Col>
            
            </Col>
            <Col>
            
            <Row>
                <Col>
                <Button variant="primary" type="submit" onClick={this.test_login}>
                Login
                </Button>
                </Col>
                <Col>
                <Button variant="primary" type="submit" onClick={this.test_logged}>
                Test Login
                </Button>
                </Col>
                <Col>
                <Button variant="primary" type="submit" onClick={this.test_logout}>
                Logout
                </Button>
                </Col>
            </Row>
            

            </Col>
            <Col>
            
            </Col>
        </Row>

        </div>

    )
    }
}