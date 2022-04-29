import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { ThemeProvider } from 'react-bootstrap';



class What extends React.Component {
    constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this)
      this.state = { cat: "Money" }
	  this.MoneyRef = React.createRef();
    }
  
    setChoice(event) {
      console.log("radio choice:",event.target);
    }

	getSub() {
		switch (this.state.cat) {
			case "Money":
				return { money: this.MoneyRef.current.state }
				break;
			case "Goods":
				return ""
				break;
			case "Words":
				return ""
				break;
			default:
				break;
		}
	}

    handleChange(event) {
      //console.log("handleChange:",event.target.value);
      this.setState( { cat: event.target.value } )
    }

	renderSwitch(x) {
		switch (x) {
			case "Money":
				return <MoneyPanel ref={this.MoneyRef} />
				break;
			case "Goods":
				return <GoodsPanel />
				break;
			case "Words":
				return <WordsPanel />
				break;
			default:
				break;
		}
	}

    render() {
      return (
  
      <div>
  
  		<h5 className="card-subtitle mb-2 text-muted text-start">
            WHAT is to be given?
        </h5>

        <fieldset>
          <Form.Group className="mb-3">

            <Form.Label >
            </Form.Label>
            
			<Form.Check
			type="radio"
			label="Money"
			name="formHorizontalRadios"
			id="WhatRadios1"
			value="Money"
			checked={this.state.cat == "Money" ? true:false}
			onChange={this.handleChange}
			/>
			<Form.Check
			type="radio"
			label="Matter"
			name="formHorizontalRadios"
			id="WhatRadios2"
			value="Goods"
			checked={this.state.cat == "Goods" ? true:false}
			onChange={this.handleChange}
			/>
			<Form.Check
			type="radio"
			label="Verbal"
			name="formHorizontalRadios"
			id="WhatRadios3"
			value="Words"
			checked={this.state.cat == "Words" ? true:false}
			onChange={this.handleChange}
			/>

  
          </Form.Group>
        </fieldset>
  
		{/*
		<SubPanel subpanel={this.state.cat} />
		{ this.state.cat == "Money"? <Money />:"" }
		*/}
		
  
		{ this.renderSwitch(this.state.cat) }

        {this.props.children}
  
        </div>
  
      );
    }
  
}
export default What;


class SubPanel extends React.Component {

	render() {

		switch (this.props.subpanel) {
			case "Money":
				return <MoneyPanel />
				break;
			case "Goods":
				return <GoodsPanel />
				break;
			case "Words":
				return <WordsPanel />
				break;
			default:
				break;
		}
	}

}

class MoneyPanel extends React.Component {
    constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.state = { amount: "", currency: "" }
	}

    handleChange(event) {
		console.log("handleChange:",event.target.value);
		const name = event.target.name;
		this.setState( { [name]: event.target.value } )
	}
  
	render() {

		return(

			<ListGroup as="ul">
			<ListGroup.Item as="li" active>
				Money
			</ListGroup.Item>
			<ListGroup.Item as="li">

				<Row>
				<Form.Group as={Col} controlId="formGridAmount">
				<Form.Label>Amount</Form.Label>
				<Form.Control type="number" placeholder="0"
				name="amount" value={this.state.amount} onChange={this.handleChange}
				/>
				</Form.Group>
				<Form.Group as={Col} controlId="formGridAddress">
				<Form.Label>Currency</Form.Label>
				<Form.Control type="text" placeholder=""
				name="currency" value={this.state.currency} onChange={this.handleChange}
				/>
				</Form.Group>
				</Row>

			</ListGroup.Item>
			<ListGroup.Item as="li" disabled>
				Enter the amount of money to be given, and at what currency
			</ListGroup.Item>
			</ListGroup>

		)
		
	}
}

class GoodsPanel extends React.Component {
    constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.state = {  name: "", amount: "", description: "" }
	}

    handleChange(event) {
		console.log("handleChange:",event.target.value);
		const name = event.target.name;
		this.setState( { [name]: event.target.value } )
	}
  
	render() {

		return(

			<ListGroup as="ul">
			<ListGroup.Item as="li" active>
				Goods, Items, Liquids, Flows, physichal things
			</ListGroup.Item>
			<ListGroup.Item as="li">

				<Row>

				<Form.Group as={Col} controlId="formGridAddress">
				<Form.Label>Name</Form.Label>
				<Form.Control type="text" placeholder=""
				name="name" value={this.state.name} onChange={this.handleChange}
				/>
				</Form.Group>

				<Form.Group as={Col} controlId="formGridAmount">
				<Form.Label>Amount</Form.Label>
				<Form.Control type="number" placeholder="0"
				name="amount" value={this.state.amount} onChange={this.handleChange}
				/>
				</Form.Group>

				</Row>

			</ListGroup.Item>
			<ListGroup.Item as="li" >

				<Row>

				<Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlTextarea1">
					<Form.Label>Description</Form.Label>
					<Form.Control as="textarea" rows={3}
						name="description" value={this.state.name} onChange={this.handleChange}
					/>
				</Form.Group>

				</Row>

			</ListGroup.Item>
			</ListGroup>

		)
		
	}
}

class WordsPanel extends React.Component {
    constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.state = {  description: "" }
	}

    handleChange(event) {
		console.log("handleChange:",event.target.value);
		const name = event.target.name;
		this.setState( { [name]: event.target.value } )
	}
  
	render() {

		return(

			<ListGroup as="ul">
			<ListGroup.Item as="li" active>
				Give a custom description
			</ListGroup.Item>

			<ListGroup.Item as="li" >

				<Row>

				<Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlTextarea1">
					<Form.Label>Description</Form.Label>
					<Form.Control as="textarea" rows={3}
						name="description" value={this.state.name} onChange={this.handleChange}
					/>
				</Form.Group>

				</Row>

			</ListGroup.Item>
			</ListGroup>

		)
		
	}
}
