import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

class Promise extends React.Component {
    constructor(props) {
      super(props)
      this.state = {isPromise: false, canTradeAsGiver: false, canTradeAsRecipient: false}
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    onClick(e) {
      
      console.log("click", e.target)
      console.log("click", e.target.checked)
  
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      this.setState({ [name]: value });
    }
  
    render() {
      return (
  
      <div>
  
		<h5 className="card-subtitle mb-2 text-muted text-start">
		PROMISE?
		</h5>
		<p>
		Is this a promise?
		</p>

		<ListGroup as="ul" variant="flush">
		<ListGroup.Item as="li">

          {/* CHECKBOX */}
          <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check name="isPromise" checked={this.state.isPromise} type="checkbox" label="This is a PROMISE"
              onClick={this.onClick} onChange={this.handleInputChange}
              />
          </Form.Group>
          {/* CHECKBOX */}
          <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check disabled={!this.state.isPromise} type="checkbox" label="This promise can be traded (as giver)"
                name="canTradeAsGiver" onChange={this.handleInputChange} checked={this.state.isPromise? this.state.canTradeAsGiver : false}
              />
          </Form.Group>
          {/* CHECKBOX */}
          <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check disabled={!this.state.isPromise} type="checkbox" label="This promise can be traded (as recipient)"
                name="canTradeAsRecipient" onChange={this.handleInputChange} checked={this.state.isPromise? this.state.canTradeAsRecipient : false}
              />
          </Form.Group>

		</ListGroup.Item >
		</ListGroup >




  
  
      </div>
  
      );
    }
  
}
export default Promise;