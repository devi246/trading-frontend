import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import ListGroup from 'react-bootstrap/ListGroup'


class Preamble extends React.Component {
    constructor(props) {
    	super(props)
		this.handleChange = this.handleChange.bind(this)
        this.state = { way: "give" }
    }
  
	handleChange(e) {
        this.setState( { way: e.target.name } )
	}

    render() { return (
  
        <div>
  
        <h5 className="card-subtitle mb-2 text-muted text-start">
            Give or Receive
        </h5>

		<ListGroup as="ul" variant="flush" >
		<ListGroup.Item as="li" style={{backgroundColor: "#f3eff3"}}>

        <Form.Check
            inline
            label="Sell or Give"
            name="give"
            type="radio"
            id="PChoiceGive"
            checked={this.state.way == "give" ? true : false}
            onChange={this.handleChange}
        />
        <Form.Check
            inline
            label="Buy or Receive"
            name="receive"
            type="radio"
            id="PChoiceReceive"
            checked={this.state.way == "receive" ? true : false}
            onChange={this.handleChange}
        />

		</ListGroup.Item >
		</ListGroup >

        

        

        </div>

    );}
  
}
export default Preamble;