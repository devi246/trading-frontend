import React, {Component} from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class Update extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (

            <div>
               <h4>Make Changes</h4>
            
               <Row className="mb-3">

                <InputGroup className="mb-3">
                    <InputGroup.Text>Field:</InputGroup.Text>
                    <Form.Select 
                    name="Country"
                    >
                    <option>Choose...</option>
                    <option>Price</option>
                    <option>When</option>
                    </Form.Select>
                    <InputGroup.Text>New Value:</InputGroup.Text>
                    <FormControl aria-label="Last name" />
                    <Button variant="info" id="button-addon2">
                        Add
                    </Button>
                </InputGroup>

                </Row>

                <Card>
                    <Card.Header>List of Suggested Changes</Card.Header>
                    <Card.Body>

                    <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Field</th>
                        <th>Value</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    <tr>
                        <td>
                            asd
                        </td>
                        <td>
                            asd
                        </td>
                        <td>
                        <Button variant="danger">Remove</Button>
                        </td>
                    </tr>

                    </tbody>
                    </Table>

                    </Card.Body>
                    <Card.Body>
                        <Button variant="success">Accept</Button>
                    </Card.Body>


                </Card>


            </div>

        )
    ;}
}
export default Update;