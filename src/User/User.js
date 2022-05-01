import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";
import Update from './UpdateUser'
import Globe from '../Global';
import EditUser from './EditUser'
import OffersActive from './OffersActive'

const User=(props)=> {

    const { userName } = useParams();

    return (

        <UserX userName={userName} user={props.user} />

    )

}
export default User;


class UserX extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoaded: false, offer: null, error: null }
        this.getUserFromServer = this.getUserFromServer.bind(this)
        this.init = false
    }

    componentDidMount() {
        if (this.init == false) {
            this.init = true
            this.getUserFromServer()
        }
    }

    getUserFromServer() {

        const userName = this.props.userName

        console.log("USER componentDidMount userName:", userName)
        console.log("GLOBE:",Globe.server)

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Authorization': ' Bearer tok'},
            credentials: 'include',
		};
        fetch(Globe.server+"/api/users/" + userName, requestOptions)
        //fetch("http://localhost:1323/api/users/" + userName, requestOptions)
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            throw new Error('Something went wrong when connecting to server');
        })
        .then(
        (result) => {
                
                console.log("result:", result)

                if(result) {
                    try {
                        let java = JSON.parse(result);
                        this.setState( { user: java, isLoaded: true } )
                    } catch(e) {
                        console.log(e);
                        this.setState( { isLoaded: true, error: e.name+" "+e.message } )
                    }
                }
        
            }
        )
        .catch((error) => {
            console.log("CAUGHT ERROR: ", error)
            this.setState( { isLoaded: true, error: error.name+" : "+error.message } )
        });


    }

    render() {

        const error = this.state.error


        if (error) {
            return <div>{error}</div>;
        } else if (!this.state.isLoaded) {
            return <div>Loading...</div>;
        } else {

            let user = this.state.user

            console.log("USER:",user)

            return (
                <>
                <Container>
    
                <br></br>
    
                <Row>
                <Col></Col>
                <Col>
    
                    <Row>
                    <Col>
                        {/* <div style={{width: "550px"}}> */}
                        <div style={{width: "550px"}}>
                            <h4>User</h4>
                        </div>
                    </Col>
                    </Row>
    
    
                    <br></br>
    
                    <Row>
                    <Col>
                        <Item item={ user } />
                    </Col>
                    </Row>
    
                    <br></br>
    
                    <Row>
                    <Col>
                        <EditUser userName={user.name} onSuccess={this.getUserFromServer} user={this.props.user} />
                    </Col>
                    </Row>
    
                    
    
    
                </Col>
                <Col></Col>
                </Row>
    
    
            </Container>

            <OffersActive userName={this.props.userName} />

            </>
            );
        }

    }
}













function Reputation(props) {

    return (

        <div>
        <h4>Reputation</h4>

        
        <p>completed/failed trades</p>
        <p>likes/dislikes from traders</p>
        <p>delays</p>

        

        </div>
    );
}



function Backup(props) {

    return (

        <div>
        <h4>Backup</h4>

        <p>total deposit. total insurance. from self. from others.</p>
        
        </div>
    );
}





function Item(props) {

    const item = props.item

    return (

        <Card>

        <ListGroup>
            <ListItem field={"Name"} value={item.name} variant={"primary"} />
            <ListItem field={"Email"} value={item.email} />
            <ListItem field={"Phone"} value={item.phone} variant={"secondary"} />
        </ListGroup>

        </Card>

    );
}


function ListItem(props) {

    return (

        <ListGroup.Item variant={props.variant}>
        <Row>
            <Col>
                {props.field}
            </Col>
            <Col>
                {props.value}
            </Col>
            <Col>
            
            </Col>
        </Row>
        </ListGroup.Item>
    );
}