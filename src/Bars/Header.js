import React, {Component} from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from './../logo.svg';

class Header extends React.Component {

    old() {
        return(
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"  />
            </header>
        )
    }

    render() {


        return (

            <header className="App-header" style={{height: "100px"}}>
                <h1 style={{paddingTop: "25px", marginLeft: "10px"}}>TRADING WEBSITE</h1>
                
            </header>

        );
    }

}

export default Header;