import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {

    const handleContact=()=>{
        alert("Order Successfully")
    }
    return (
        <div className="contact">
        <div className="contactForm w-50 m-auto my-5 border p-3">
            <h2 className="py-4 fw-bold text-center border-bottom mb-5">
            <span className="text-danger">Contact</span> us
            </h2>
            <Form onSubmit={handleContact}>
            <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
            </Row>

            <Form.Group className="mb-4" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="Your Address" />
            </Form.Group>

            <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control />
                </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
        </div>
    );
};

export default Contact;