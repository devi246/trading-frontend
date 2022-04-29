import React, {Component} from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import OfferForm from './OfferForm';

class NewOffer extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {

    return (

      <Container>

      <br></br><br></br>

      {/* FORM */}

      <Row>
        <Col style={{backgroundColor: "white"}}></Col>
        <Col>
          <OfferForm user={this.props.user} />
        </Col>
        <Col style={{backgroundColor: "white"}}></Col>
      </Row>

      <br></br>
      <br></br>
      <br></br>

      </Container>
    )

  ;}

}
export default NewOffer;