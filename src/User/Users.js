import React, {Component} from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Outlet } from 'react-router-dom';

class Users extends React.Component {

render() {
    return (

        <div>

        <Outlet />

        </div>

    );}

}
export default Users;