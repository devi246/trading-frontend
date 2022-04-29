import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'



class Address extends React.Component {
    constructor(props) {
      super(props)
      this.state = {visible: false, Zip: "", Address: "", City: ""}
      this.handleChange = this.handleChange.bind(this)
      this.toggleVisible = this.toggleVisible.bind(this)
    }
  
    handleChange(event) {
      const inputName = event.target.name;
      const target = event.target;
  
      switch (target.type) {
        case 'checkbox': this.setState({  [inputName]: target.checked}  ); break;
        default: this.setState({ [inputName]: target.value}  ); break;
      }
      console.log("handleChange:", inputName, this.state)
    }

    toggleVisible(e) {
      e.preventDefault()
      this.setState(prevState => ({      visible: !prevState.visible    }));
      console.log("click", this.state.visible, this.state)
      //this.forceUpdate()
    }
  
    render() {
  
        if (this.state.visible) {
          return (
            <div>
              
  
            <Button variant="link" onClick={this.toggleVisible}>Give Address &darr;</Button>
  
            <Card>
            <div style={{backgroundColor: "pink", padding: "5px"}}>
  
            <Row className="mb-3">
            
              <Form.Group as={Col} controlId="formGridCountry">
              <Form.Label>Country</Form.Label>
              <Form.Select 
                name="Country" value={this.state.Country} onChange={this.handleChange}
              >
                <option>Choose...</option>
                <option>Finland</option>
                <option>Sweden</option>
              </Form.Select>
              </Form.Group>
  
              <Form.Group as={Col} controlId="formGridAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="1234 Main St"
                name="Address" value={this.state.Address} onChange={this.handleChange}
              />
              </Form.Group>
  
            </Row>
  
  
            <Row className="mb-3">
  
            
  
            <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              name="City" value={this.state.City} onChange={this.handleChange}
            />
            </Form.Group>
  
            {/* CHOOSE STATE */}
            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select 
              name="State" value={this.state.State} onChange={this.handleChange}
            >
              <option>Choose...</option>
              <option>Utah</option>
              <option>Alaska</option>
            </Form.Select>
            </Form.Group>
  
  
  
  
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text"
                name="Zip" value={this.state.Zip} onChange={this.handleChange}
              />
            </Form.Group>
  
  

            </Row>
  
            
            </div>
            </Card>
            </div>
          )
        }
        else {
          return (
            <Button variant="link" onClick={this.toggleVisible}>Give Address &darr;</Button>
          )
        }
  
    ;}
    
}
export default Address;