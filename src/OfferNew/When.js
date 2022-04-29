import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import ListGroup from 'react-bootstrap/ListGroup'


class When extends React.Component {
    constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this)
    }
  
    handleChange(event) {
		console.log("PERSON handleChange:",event.target.name,":", event.target.value);
		this.setState( { [event.target.name]: event.target.value } )
		//this.setState( { dog: {tail: "er"} } )
		//console.log("state", this.state)
	}

    render() { return (
  
        <div>
  
		<h5 className="card-subtitle mb-2 text-muted text-start">
		WHEN
		</h5>

		{/*
		{['radio'].map((type) => (
		<div key={`inline-${type}`} className="mb-3">
		<Form.Check
			inline
			label="Once"
			name="group1"
			type={type}
			id={`inline-${type}-1`}
			onChange={this.handleChange}
		/>
		<Form.Check
			inline
			label="Periodically"
			name="group1"
			type={type}
			id={`inline-${type}-2`}
			onChange={this.handleChange}
		/>
		<Form.Check
			inline
			label="Flow"
				name="group1"
			type={type}
			id={`inline-${type}-3`}
				onChange={this.handleChange}
		/>
		</div>
  		))}
		*/}


		<ListGroup as="ul" variant="flush">
		<ListGroup.Item as="li">

		{/* DATE */}
		<Form.Group controlId="formGridDate">
			<Form.Label>Date is optional:</Form.Label>
			<Form.Control type="date" placeholder="" />
		</Form.Group>

		</ListGroup.Item >
		</ListGroup >

		<br></br>


        </div>

    );}
  
  }
  



export default When;