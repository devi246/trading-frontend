import React, {Component} from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import OfferForm from './OfferNew/OfferForm';
import testAll from './test/test'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import ListGroup from 'react-bootstrap/ListGroup'
import dodge from './images/dodge.jpg'
import classic from './images/classic.jpg'

class Start extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {

		const blockStyle = {
			marginLeft:"auto",
   			marginRight:"auto",
   			display:"block",
			width: '18rem'
		}

		return (

			<Container>

			<Row>
				<Col></Col>
				<Col sm={8} style={{backgroundColor: "white"}}>
					<br></br>
					<h2>BUY OR SELL STUFF</h2>
					<p>(this website it's just a demo)</p>
					<h4>Featured Offers:</h4>
					<br></br>

					<Row style={{backgroundColor: "white"}}>

					<Col style={{ backgroundColor: "white" }}>
						<Card style={blockStyle}>
						<Card.Img variant="top" src={classic} style={{height: "160px", width: "auto", textAlign:"center"}} />
						{/*<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />*/}
						<Card.Body>
							<Card.Title>Lucky Car</Card.Title>
							<Card.Text>
							Travelling in this car brings you good luck. Get it if you want to win the lottery.
							</Card.Text>
						</Card.Body>
						<ListGroup className="list-group-flush">
							<ListGroupItem>Price: 100 €</ListGroupItem>
						</ListGroup>
						<Card.Body>
							<Card.Link href="/offers/1">View Offer</Card.Link>
						</Card.Body>
						</Card>
					</Col>

					<Col >

						<Card style={blockStyle}>
						<Card.Img variant="top" src={dodge} style={{height: "160px", width: "auto"}} />
						<Card.Body>
							<Card.Title>Speedy Car</Card.Title>
							<Card.Text>
							This car goes twice as fast as whatever the speed limit is. Bring some cash to pay the cops.
							</Card.Text>
						</Card.Body>
						<ListGroup className="list-group-flush">
							<ListGroupItem>Price: 1000 €</ListGroupItem>
						</ListGroup>
						<Card.Body>
							<Card.Link href="/offers/2">View Offer</Card.Link>
						</Card.Body>
						</Card>

					</Col>

					</Row>

				</Col>
				<Col></Col>
			</Row>

			</Container>
		)

	;}

}
export default Start;