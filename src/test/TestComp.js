import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'


import Globe from '../Global';
import ListGroup from 'react-bootstrap/ListGroup'
import { Formik } from 'formik';
import { useFormik } from 'formik';
import { object, string, number, date, InferType } from 'yup';
import * as yup from 'yup';
import { InputGroup } from 'react-bootstrap';




async function submitForm(values) {

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
            console.log("SEND GIFT FORM. response status", response.status)
            return response.text()
        })
        .then(data => console.log("SEND GIFT FORM. got data", data) );
    // FETCH
}






const schema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string(),
    price: yup.number().min(0, "must be a positive number"),
  });
  

  function TestComp() {
    return (
      <Formik
        validationSchema={schema}
        onSubmit={submitForm}
        initialValues={{
            name: '',
            description: '',
            price: "0.0",
            way: 'give',
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

                <ListGroup as="ul" variant="flush" >
                <ListGroup.Item as="li" style={{backgroundColor: "#f3eff3"}}>

                <Form.Check
                    inline
                    label="Sell or Give"
                    name="way"
                    value="give"
                    type="radio"
                    id="PChoiceGive"
                    checked={values.way == "give" ? true:false}
                    onChange={handleChange}
                />
                <Form.Check
                    inline
                    label="Buy or Receive"
                    name="way"
                    value="receive"
                    type="radio"
                    id="PChoiceReceive"
                    checked={values.way == "receive" ? true:false}
                    onChange={handleChange}
                />

                </ListGroup.Item >
                </ListGroup >

            </Row>


            <Row className="mb-3">



              <Form.Group as={Col} md="6" controlId="validationFormik01" >

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

            <Form.Group as={Col} md="12" controlId="validationFormik02">

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



            <Button type="submit">Submit form</Button>

          </Form>
        )}
      </Formik>
    );
  }
  
export default TestComp