import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";
import Update from './UpdateUser'
import Globe from '../Global';


class EditUser extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.state = { email: "", phone: "" }
    }

    handleChange(e) {
        e.preventDefault();
		this.setState( { [e.target.name]: e.target.value } )
    }

    onFormSubmit(e) {
        e.preventDefault();

        const userName = this.props.userName
        const data = this.state

        console.log("USER EDIT: ON SUBMIT:",this.state, "username:", userName)

        // FETCH
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(data)
		};
		fetch('http://localhost:1323/api/users/'+userName+'/edit', requestOptions)
		.then(response => {
				console.log("USER EDIT. response status", response.status)
				return response.text()
			})
		.then(data => {
            console.log("USER EDIT. got data", data)
            this.props.onSuccess()
        } );
        // FETCH
    }

    render() {

        const user = this.props.user
        
        if (user == "" || user != this.props.userName ) {
            return (<div></div>)
        }

        return (

            <div>

            <h5>Edit Details</h5>

            <Form style={{ width: "555px"}} onSubmit={this.onFormSubmit}>

            <Row>

            {/*
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="email" name="email" onChange={this.handleChange} value={this.state.email} />
            </Form.Group>
            */}

            <Form.Group as={Col} sm={6} controlId="formGridEmail">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="phone" name="phone" onChange={this.handleChange} value={this.state.phone} />
            </Form.Group>

            </Row>

            <br></br>

            <Button variant="primary" type="submit">
                Submit Changes
            </Button>

            </Form>


            </div>

        )
    ;}
}
export default EditUser;