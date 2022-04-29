import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import ListGroup from 'react-bootstrap/ListGroup'
import { FormLabel } from 'react-bootstrap';


class Price extends React.Component {
    constructor(props) {
    	super(props)
		this.handleChange = this.handleChange.bind(this)
        this.state = { price: "0 Euro" }
    }
  
	handleChange(e) {
		//this.props.lift(e.target.name, e.target.value)
        this.setState( {price: e.target.value} )
	}

    render() { return (
  
        <div>
  
        <h5 className="card-subtitle mb-2 text-muted text-start">
            PRICE
        </h5>


		<ListGroup as="ul" variant="flush">
		<ListGroup.Item as="li">


        <Row>
            <Col>
            <InputGroup className="mb-3">

				<InputGroup.Text id="inputGroup-sizing-default">Price</InputGroup.Text>
				<FormControl
				name="price"
				type="text"
                value={this.state.price}
				onChange={ this.handleChange }
				/>
                

			</InputGroup>
            </Col>
            <Col>
                <p>
                    Examples: "2 euros", "3 ¥"
                </p>
            </Col>
        </Row>

		</ListGroup.Item >
		</ListGroup >









        </div>

    );}
  
}
export default Price;