import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

import Globe from '../Global';
import ListGroup from 'react-bootstrap/ListGroup'
import { Formik } from 'formik';
import { useFormik } from 'formik';
import { object, string, number, date, InferType } from 'yup';
import * as yup from 'yup';
import { InputGroup } from 'react-bootstrap';
import TestComp from './TestComp'

class TestPage extends Component {

    render() {

        return (
            <>
            <Container>
            

            <Row>
                <Col></Col>
                <Col>
                <h3>Test Page</h3>
                <TestComp />
                </Col>
                <Col></Col>
            </Row>
            

            </Container>
            </>
        )

    }

}
export default TestPage





const validate = values => {

    const errors = {};
 
  
 
    if (!values.firstName) {
 
      errors.firstName = 'Required';
 
    } else if (values.firstName.length > 15) {
 
      errors.firstName = 'Must be 15 characters or less';
 
    }
 
  
 
    if (!values.lastName) {
 
      errors.lastName = 'Required';
 
    } else if (values.lastName.length > 20) {
 
      errors.lastName = 'Must be 20 characters or less';
 
    }
 
  
 
    if (!values.email) {
 
      errors.email = 'Required';
 
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
 
      errors.email = 'Invalid email address';
 
    }
 
  
 
    return errors;
 
  };
 
  
 
  const SignupForm = () => {
 
    const formik = useFormik({
 
      initialValues: {
 
        firstName: '',
 
        lastName: '',
 
        email: '',
 
      },
 
      validate,
 
      onSubmit: values => {
 
        alert(JSON.stringify(values, null, 2));
 
      },
 
    });
 
    return (
 
      <form onSubmit={formik.handleSubmit}>
 
        <label htmlFor="firstName">First Name</label>
 
        <input
 
          id="firstName"
 
          name="firstName"
 
          type="text"
 
          onChange={formik.handleChange}
 
          onBlur={formik.handleBlur}
 
          value={formik.values.firstName}
 
        />
 
        {formik.touched.firstName && formik.errors.firstName ? (
 
          <div>{formik.errors.firstName}</div>
 
        ) : null}
 
  
 
        <label htmlFor="lastName">Last Name</label>
 
        <input
 
          id="lastName"
 
          name="lastName"
 
          type="text"
 
          onChange={formik.handleChange}
 
          onBlur={formik.handleBlur}
 
          value={formik.values.lastName}
 
        />
 
        {formik.touched.lastName && formik.errors.lastName ? (
 
          <div>{formik.errors.lastName}</div>
 
        ) : null}
 
  
 
        <label htmlFor="email">Email Address</label>
 
        <input
 
          id="email"
 
          name="email"
 
          type="email"
 
          onChange={formik.handleChange}
 
          onBlur={formik.handleBlur}
 
          value={formik.values.email}
 
        />
 
        {formik.touched.email && formik.errors.email ? (
 
          <div>{formik.errors.email}</div>
 
        ) : null}
 
  
 
        <button type="submit">Submit</button>
 
      </form>
 
    );
 
  };




  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  });
  

  function FormExample() {
    return (
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          firstName: 'Mark',
          lastName: 'Otto',
          username: '',
          city: '',
          state: '',
          zip: '',
          terms: false,
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
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationFormik01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormik02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                />
  
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    isInvalid={!!errors.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationFormik03">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  isInvalid={!!errors.city}
                />
  
                <Form.Control.Feedback type="invalid">
                  {errors.city}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormik04">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="State"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  isInvalid={!!errors.state}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.state}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormik05">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Zip"
                  name="zip"
                  value={values.zip}
                  onChange={handleChange}
                  isInvalid={!!errors.zip}
                />
  
                <Form.Control.Feedback type="invalid">
                  {errors.zip}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Check
                required
                name="terms"
                label="Agree to terms and conditions"
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
                feedbackType="invalid"
                id="validationFormik0"
              />
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        )}
      </Formik>
    );
  }
  