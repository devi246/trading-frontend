import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import AlterOffer from './AlterOffer'
import Bids from './Bids'
import Globe from './../Global'
import ListGroup from 'react-bootstrap/ListGroup'
import dodge from './../images/dodge.jpg'
import snowflake from './../images/snowflake.jpg'
import classic from './../images/classic.jpg'

const Offer=(props)=> {
    const { id } = useParams();
    return ( <OfferX offerId={id} user={props.user} /> )
}
export default Offer;


class OfferX extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isLoaded: false, offer: null, error: null }
        this.getOfferFromServer = this.getOfferFromServer.bind(this)
        this.init = false
    }

    componentDidMount() {
        if (this.init==false) {
            this.init = true
            this.getOfferFromServer()
        }
    }

    getOfferFromServer() {
        const offerId = this.props.offerId

        console.log("OFFER componentDidMount offerId:", offerId)

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', },
            credentials: 'include',
		};
        fetch("http://localhost:1323/api/offers/" + offerId, requestOptions)
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                console.log("ERROR")
            }
        })
        .then(
        (result) => {
                
                if(result) {
                    try {
                        let java = JSON.parse(result);
                        this.setState( { isLoaded: true, offer: java } );
                    } catch(e) {
                        console.log(e);
                    }
                }

            },
            (error) => {
                console.log("OFFER Error", error)
                this.setState( { isLoaded: true, error: error } )
            }
        )

    }

    render() {

        if (this.state.error !== null) {
            return (
                <Container>
                    <br></br>
                    <Col></Col>
                    <Col>Server Error</Col>
                    <Col></Col>
                </Container>
            )
        } else if (!this.state.isLoaded) {
            return (
                <Container>
                <br></br>
                <Col></Col>
                <Col>Loading...</Col>
                <Col></Col>
                </Container>
            )
        } else {
            let item = this.state.offer
            

            return (
                <Container>
    
                <br></br>
    
                <Row>
                <Col></Col>
                <Col>
    
                    <Row>
                    <Col>
                        {/* <div style={{width: "550px"}}> */}
                        <div style={{width: "550px"}}>
                            <h4>Offer</h4>
                        </div>
                    </Col>
                    </Row>
    

    
                    <br></br>
    
    
                    <Row>
                    <Col>
                        <Item offer={ item } />
                    </Col>
                    </Row>
    
                    <br></br>
    
                    <Row>
                    <Col>
                        <GiverAndRecipient item={ item } />
                    </Col>
                    </Row>
    
                    <br></br>
    
                    <Row>
                    <Col>
                        <ItemControls offer={item} updateOffer={this.getOfferFromServer} user={this.props.user} />
                    </Col>
                    </Row>
    
    
                    <br></br><br></br>
    

                    <br></br>
    
                    <ChangeOffer offer={item} user={this.props.user}>
                        <AlterOffer offerId={item.Id} updateOffer={this.getOfferFromServer} />
                    </ChangeOffer>

                    {/* 
                    <Row>
                    <Col>
                        <Backup />
                    </Col>
                    </Row>
                    */}
    
                    <br></br><br></br>
    
    
    
                    <br></br><br></br><br></br><br></br>
    
                </Col>
                <Col></Col>
                </Row>
    
    
                </Container>
            );
        }

    }


}

class ChangeOffer extends React.Component {

    render() {
        const offer = this.props.offer
        //const isLogged = Globe.isLogged()
        //const userName = Globe.getUserName()
        const user = this.props.user

        if (offer.State == "finished") {
            return ""
        }
        else if (user && user != "") {
            console.log("islogged")
            console.log("username",user, offer.Giver)

            const giver = offer.Giver == null ? "" : offer.Giver.name
            const receiver = offer.Receiver == null ? "" : offer.Receiver.name

            if (user == giver || user == receiver) {
                return (
                    <Row>
                    <Col>
                        {this.props.children}
                    </Col>
                    </Row>
                )
            }
            return ""
        }
        else {
            return ""
        }
    }

}



class GiverAndRecipient extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        //console.log("ITEM", this.props.item)
        let giver = this.props.item.Giver
        giver = giver !== null ? giver : ""
        let receiver = this.props.item.Receiver
        receiver = receiver !== null ? receiver : ""

        const offer = this.props.item

        return (

            <Table striped bordered hover>
            <thead>
                <tr>
                <th>
                    {offer.Price > 0? "Seller" : "Giver"}
                </th>
                <th>
                    {offer.Price > 0? "Buyer" : "Receiver"}
                </th>
                </tr>
            </thead>
            <tbody>
                
            <tr>
                <td>
                    <Link to={`/users/${giver.name}`}
                    key={giver.name}>{giver.name}</Link>
                </td>
                <td>
                    <Link to={`/users/${receiver.name}`}
                    key={receiver.name}>{receiver.name}</Link>
                </td>
            </tr>

            </tbody>
            </Table>

        )
    ;}
}







function Backup(props) {

    return (

        <div>
        <h4>Backup</h4>

        <p>deposit, insurance</p>
        
        </div>
    );
}



class ItemControls extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { buying: false }
    }

    sendBuyRequest() {

        console.log("ACCEPT:", this.state)

        const offerId = this.props.offer.Id

        let data = { Buy: true }

        console.log("ACCEPT: SEND DATA:", data)

        // FETCH
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(data)
		};
		fetch(Globe.server+'/api/offers/'+offerId+'/alter', requestOptions)
        //fetch('http://localhost:1323/api/offers/'+offerId+'/alter', requestOptions)
        .then(response => {
            console.log("SEND ALTER FORM. Response status:", response.status)
            return response.text()
        })
        .then(data => {
            console.log("SEND ALTER FORM. Got data:", data)
            this.props.updateOffer()
            this.setState( { buying: false } )
        } );
        // FETCH


    }

    handleClick(e) {
        e.preventDefault();

        switch (e.target.name) {
            case "buy":
                
                console.log("YOU CLICKED BUY")
                this.setState( { buying: true } )

                break;
            case "confirm":

                console.log("YOU CONFIRMED IT")
                
                this.sendBuyRequest()

                break;
            case "cancel":
        
                console.log("YOU CANCELLED")
                this.setState( { buying: false } )

                break;
            default:
                break;
        }

    }

    render() {

        const userName = this.props.user
        const offer = this.props.offer

        let giver = ""
        if (this.props.offer.Giver) {
            giver = this.props.offer.Giver.name
        }

        let receiver = ""
        if (this.props.offer.Receiver) {
            receiver = this.props.offer.Receiver.name    
        }
        
        console.log("ITEM CONTROLS:",giver,receiver,userName)

        if (userName !== "" && userName === receiver) {
            return (
                <p>You own this.</p>
            )
            
        }
        else if (userName !== "" && userName == giver) {
            return (<></>)
        }
        else {

        return (
            <>
            
            Price {offer.Price} {offer.Currency}
            { this.state.buying? 
            
                
                <Row>
                    <Col>
                    <b>Buy this for {offer.Price} {offer.Currency}?</b>
                    </Col>

                    <Col className="float-right pull-right align-right" style={{backgroundColor: 'white', textAlign: 'right'}}>
                        <Button variant="primary" name="cancel"  onClick={this.handleClick}>Cancel</Button>{' '}
                        <Button variant="primary" name="confirm" onClick={this.handleClick}>Confirm</Button>
                        
                    
                    </Col>
                </Row>
                
                
            
            :
            <>
            
            <br></br>
            <Button variant="primary" name="buy" onClick={this.handleClick}>Buy</Button>
            </>
            }


            </>
        )

    }

    ;}
}

function getImage(source) {

    if (source == "dodge") {
        return (
            <img src={dodge} alt="Car Image" style={{height: "100px"}} />
        )
    }
    else if (source == "classic") {
        return (
            <img src={classic} alt="Car Image" style={{height: "100px"}} />
        )
    }
    else {
        return (
            <img src={snowflake} alt="Content Image" style={{height: "100px"}} />
        )
    }
}


function Item(props) {

    const offer = props.offer

    return (
        <>

        
        {getImage(offer.Content.Image)}
        <br></br><br></br>
        <h5>{offer.Name}</h5>

        <p>{offer.Content.Description == "" ? "-no description-": offer.Content.Description }</p>
        



        </>
    );
}