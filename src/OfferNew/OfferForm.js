import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { Link } from "react-router-dom";

import Globe from '../Global';
import ListGroup from 'react-bootstrap/ListGroup'
import { Formik } from 'formik';
import { useFormik } from 'formik';
import { object, string, number, date, InferType } from 'yup';
import * as yup from 'yup';
import { InputGroup } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const OfferForm=(props)=> {

    let navigate = useNavigate();

    const ref = useRef(null);

    const GoLogin = () => {
        //console.log("GO LOGIN")
        //console.log("ref", ref.current.values)

        Globe["makeform"] = ref.current.values
        navigate("/login", { state: "/offers/new" });
    }

    const GotoOffer = (offerId) => {
        console.log("GOTO OFFER ID:", offerId)
        navigate("/offers/"+offerId, { });
    }
   
    const someFuncton = () => {
        console.log(ref.current.values)
    }

    return (
        <>
        <Container>
        
        

        <Row>
            <Col></Col>
            <Col>

            <Card>
            <Card.Header><h4 style={{marginBottom:"0px"}}>NEW OFFER</h4></Card.Header>
                <Card.Body >

            <OfferFormFormik gologin={GoLogin} user={props.user} innerRef={ref} GotoOffer={GotoOffer} />

                </Card.Body>
            </Card>

            </Col>
            <Col></Col>
        </Row>
        

        </Container>
        </>
    )

}
export default OfferForm



async function submitForm(values, callback) {

    // FETCH
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(values)
    };
    fetch('http://localhost:1323/offers/new', requestOptions)
        .then(response => {
            return response.text()
        })
        .then(
            data => {
                //console.log("SEND OFFER FORM got data:", data)
                callback(data)
            },
            error => {
                console.log("SUBMIT ERROR: cant reach server", error)
            }
        );
    // FETCH
}






const schema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string(),
    price: yup.number().min(0, "must be a positive number"),
});
  

function OfferFormFormik(props) {

    let initialValues
    if (Globe.makeform) initialValues = Globe.makeform
    else initialValues = {
        name: '',
        description: '',
        price: "0.0",
        way: 'give',
    }

return (
    <Formik
    innerRef={props.innerRef}
    validationSchema={schema}
    initialValues={initialValues}
    onSubmit={(values) => {
        submitForm(values, (offerId) => {
            props.GotoOffer(offerId)
        })
    }}
    >
    {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
    }) => (
        <Form noValidate onSubmit={handleSubmit} style={{width: "550px"}}>

        <Row>
            <Col>

            <Form.Check
                inline
                label="Selling"
                name="way"
                value="give"
                type="radio"
                id="PChoiceGive"
                checked={values.way == "give" ? true:false}
                onChange={handleChange}
            />
            <Form.Check
                inline
                label="Buying"
                name="way"
                value="receive"
                type="radio"
                id="PChoiceReceive"
                checked={values.way == "receive" ? true:false}
                onChange={handleChange}
            />

            </Col>
        </Row>


        <Row className="mb-3">

            <Form.Group as={Col} xs="6" controlId="validationFormik01" >

                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    isValid={touched.name && !errors.name}
                    isInvalid={touched.name && !!errors.name}
                />
                
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                        {errors.name}
                </Form.Control.Feedback>

            </Form.Group>

        </Row>


        <Row>

        <Form.Group as={Col} xs="12" controlId="validationFormik02">

            <Form.Label>Description</Form.Label>
            <Form.Control
                type="text"
                name="description"
                as="textarea"
                value={values.description}
                onChange={handleChange}
                isValid={touched.description && !errors.description}
                isInvalid={!!errors.description}
            />

            <Form.Control.Feedback type="invalid">
                    {errors.description}
            </Form.Control.Feedback>

        </Form.Group>

        </Row>

        <br></br>

        <Row style={{backgroundColor: 'white'}}>



            <Form.Group as={Col} controlId="validationFormikUsername">

                
                <InputGroup hasValidation>

                    <InputGroup.Text id="inputGroupPrepend">Price</InputGroup.Text>
                    <Form.Control
                        type="text"
                        placeholder="0.0"
                        aria-describedby="inputGroupPrepend"
                        name="price"
                        value={values.price}
                        onChange={handleChange}
                        isInvalid={!!errors.price}
                        isValid={touched.price && !errors.price}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.price}
                    </Form.Control.Feedback>

                </InputGroup>




            </Form.Group>

            <Form.Group as={Col}  controlId="selection">

            
                <Form.Select aria-label="Default select example">
                        <option>Euro</option>
                        <option value="1">Dollars</option>
                </Form.Select>

            </Form.Group>


        </Row>


        <br></br>


        {props.user == "" ?
        <>
        <Button type="submit" disabled variant="secondary">Create</Button>
        {' '}<Button onClick={props.gologin} variant="link">Please LOGIN first</Button>
        </>
        :
        <>


        <Button type="submit">Create</Button>
        </>
        }

        </Form>
    )}
    </Formik>
);
}

