import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Address from './Address'
import ListGroup from 'react-bootstrap/ListGroup'



class Contact extends React.Component {
    constructor(props) {
		super(props)
		if (typeof props.init !== 'undefined') {
			this.state = props.init
		} else {
			this.state = { email: "", phone: "", user: "" };
		}
		
		this.handleChange = this.handleChange.bind(this)
		this.receiveAddressState = this.receiveAddressState.bind(this)
		this.handleChangeFromBelow = this.handleChangeFromBelow.bind(this)
    }
  
	callFromParent() {
		console.log("CALL FROM PARENT")
	}

	componentDidMount() {
		console.log("CONTACT DID MOUNT", this.state)
	}

	handleChangeFromBelow(key, val) {
		console.log("handleChangeFromBelow:",key,val)
		this.setState({[key]: val});
	}

    handleChange(event) {
		console.log("CONTACT handleChange:",event.target.name,":", event.target.value);
		this.setState( { [event.target.name]: event.target.value } )
		//this.setState( { dog: {tail: "er"} } )
		//console.log("state", this.state)
	}

	receiveAddressState(data) {
		console.log("CONTACT receiveAddressState:", data);
		this.setState( { address: data } )
		//console.log("PERSON state", this.state)
	}

    render() {
		
		return (

			<div>

			<ListGroup as="ul" variant="flush">


			<ListGroup.Item as="li" >


			<InputGroup className="mb-3">

			<InputGroup.Text id="inputGroup-sizing-default">Account</InputGroup.Text>
			<FormControl
			aria-label="Default"
			aria-describedby="inputGroup-sizing-default"
			name="user"
			type="text" placeholder="search"
			onChange={this.handleChange} value={this.state.user}
			/>

			</InputGroup>


			<Row className="mb-3">

			<Form.Group as={Col} controlId="formGridEmail">
			<Form.Label>Email</Form.Label>
			<Form.Control type="email" placeholder="email" name="email" onChange={this.handleChange} value={this.state.email} />
			</Form.Group>

			<Form.Group as={Col} controlId="formGridPassword">
			<Form.Label>Phone</Form.Label>
			<Form.Control type="text" placeholder="phone number" name="phone" onChange={this.handleChange} value={this.state.phone} />
			</Form.Group>

			</Row>


			</ListGroup.Item>

			</ListGroup>


			{/* 
			<Address lift={ this.handleChangeFromBelow } />
			*/}

			</div>
  
    );}
  
}
export default Contact;