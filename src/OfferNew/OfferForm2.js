import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Promise from './Promise'
import What from './What'
import Contact from './Contact'
import Price from './Price'
import When from './When'
import Delivery from './Delivery'
import Preamble from './Preamble';
import Globe from '../Global';
import ListGroup from 'react-bootstrap/ListGroup'

class OfferForm extends Component {
    constructor(props) {
      super(props);
      this.state = {}
	  this.lift = this.lift.bind(this)

      this.PreambleRef = React.createRef();
	  this.WhatRef = React.createRef();
      this.PriceRef = React.createRef();
	  this.WhenRef = React.createRef();

	  this.PromiseRef = React.createRef();
	  
      this.RecipientRef = React.createRef();
	  this.GiverRef = React.createRef();
	  this.DeliveryRef = React.createRef();

      this.initGiver = {email: "ada@asd", phone: "123", user: "joe"}
    }

	lift(key, val) {
		//console.log("lifted:",key,val)
		this.setState( {[key]: val} )
	}

	gatherState() {

		const s = {
            pre: this.PreambleRef.current.state,
			what: this.WhatRef.current.getSub(),
            price: this.PriceRef.current.state,
			//when: this.WhenRef.current.state,
            //promise: this.PromiseRef.current.state,

            //reciever: this.RecipientRef.current.state,
            //giver: this.GiverRef.current.state,
            //delivery: this.DeliveryRef.current.state,
		}
		return s
	}

    onFormSubmit = (e) => {
        e.preventDefault();
        //console.log("submit form", e.target.Zip, e.target.Zip.value)
        //this.props.handleSubmit(this.state);
        //this.setState(this.initialState);

        if (!Globe.isLogged()) {
            alert("PLEASE LOGIN FIRST")
            return
        }

        console.log("IS LOGGED?", Globe.isLogged())

		console.log("ON SUBMIT: giftform STATE:", this.state)

        const all = this.gatherState()
        console.log("ALL THE STATE: ", all)

		//this.RecipientRef.current.callFromParent()

        //let data = { Name: "tim", Email: "tim@example.com" }
        let data = this.gatherState()

        // FETCH
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(data)
		};
		fetch('http://localhost:1323/offers/new', requestOptions)
			.then(response => {
				console.log("SEND GIFT FORM. response status", response.status)
				return response.text()
			})
			.then(data => console.log("SEND GIFT FORM. got data", data) );
        // FETCH

    }

    componentWillUnmount() {
      //console.log("GiftForm will UN mount")
    }

    render() {
        return (

            <div className="card" style={{}}>
            <div className="card-header bg-primary text-white ">
              <h4 className="card-title text-start">NEW OFFER</h4>
            </div>
            <div className="card-body" style={{backgroundColor: "#f3eff3"}}>


            <Form style={{ width: "555px"}} onSubmit={this.onFormSubmit} >


            <Preamble ref= { this.PreambleRef }/>

			<br></br>
            

            <What ref={ this.WhatRef } />

            {/*
			<br></br>
            <br></br>

			<When ref={ this.WhenRef } />
             */}


		<br></br><br></br>

        <Price ref = { this.PriceRef } />

		<br></br><br></br>

            {/*
		<Promise ref = {this.PromiseRef} />
             */}



{/* 
        <h5 className="card-subtitle mb-2 text-muted text-start">
            RECIPIENT
        </h5>
        <p>
            The person that will get something.
            Give at least one of these: email, phone or address.
            All of these are kept private.
        </p>


        <Contact ref = {this.RecipientRef} />


<br></br><br></br>


        <h5 className="card-subtitle mb-2 text-muted text-start">
            GIVER
        </h5>
        <p>
            The person that gives.
            Provide at least one of these: email, phone or address.
        </p>

		<Contact ref = {this.GiverRef} init = { this.initGiver } />


<br></br><br></br>


        <Delivery ref = {this.DeliveryRef} />
        */}


		<ListGroup as="ul" variant="flush">
		<ListGroup.Item as="li">

        {/* SUBMIT */}
        <Button variant="primary" type="submit">
            Submit Offer
        </Button>

		</ListGroup.Item >
		</ListGroup >




        </Form>

        </div>
        </div>
        );
    }
}
export default OfferForm;
