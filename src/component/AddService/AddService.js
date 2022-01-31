import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

const AddService = () => {
    return (
        <div className="p-4">
            <h2 className='text-success fs-1 fw-bolder'>Add Services</h2>
            <div className="border border-5 border-info w-50 mx-auto py-3 px-4">
            <Form className=''>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                <Col sm={12}>
                <Form.Control type="text" placeholder="Name" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Col sm={12}>
                <Form.Control type="number" placeholder="price" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalAddress">
                <Col sm={12}>
                <Form.Control type="text" placeholder="img url" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPhone">
                <Col sm={12}>
                <textarea className='w-100 py-3' type="text" placeholder="discription" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Col sm={12}>
                <Form.Control type="submit" value="Submit" className='btn btn-success'/>
                </Col>
            </Form.Group>

        </Form>
            </div>
        </div>
    );
};

export default AddService;