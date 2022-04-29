import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'



class Delivery extends React.Component {
    constructor(props) {
    	super(props)
		this.handleChange = this.handleChange.bind(this)
    }
  
	handleChange(e) {
		
	}

    render() { return (
  
        <div>
  
        <h5 className="card-subtitle mb-2 text-muted text-start">
        DELIVERY
        </h5>

        {/* OPTION One or More recipients */}
        <Form.Group controlId="formGridTrade">
            <Form.Label>Who delivers?</Form.Label>
            <Form.Select defaultValue="Choose...">
            <option>Giver</option>
            <option>Courier (like DHL, etc)</option>
            <option>Receiver</option>
            <option>Other</option>
            </Form.Select>
        </Form.Group>


        </div>

    );}
  
}
export default Delivery;