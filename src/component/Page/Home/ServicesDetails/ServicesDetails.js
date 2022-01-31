import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useService from '../../../hooks/useService';

const ServicesDetails = () => {
    const {user}=useAuth();
    const { serviceId } = useParams();
    const [serviceItem] = useService();
    const [selectedItem, setSelectedItem] = useState([]);

    useEffect(() => {
        const matched = serviceItem.find((item) => item.id == serviceId);
        setSelectedItem(matched);
      }, [serviceItem,serviceId]);

    return (
        <div className='container my-5'>
            <div className="row">
                <h1 className='text-secondary text-start ms-3 mb-4'>Register as a Travelo Tour</h1>

                <div className="col-md-6 mt-2 mb-3">
                <div className="card p-4">
                <Form className='mt-3'>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                        <Col sm={12}>
                        <Form.Control type="text" placeholder="Name" value={user.displayName}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Col sm={12}>
                        <Form.Control type="email" placeholder="Email" value={user.email}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalAddress">
                        <Col sm={12}>
                        <Form.Control type="text" placeholder="Address" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPhone">
                        <Col sm={12}>
                        <Form.Control type="text" placeholder="Phone" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Col sm={12}>
                        <Form.Control type="submit" value="Submit" className='btn btn-info'/>
                        </Col>
                    </Form.Group>

                </Form>
                </div>
                </div>

                <div className="col-md-6">
                    <div className="card mx-auto p-4">
                        <img src={selectedItem?.img} alt="" style={{width:"250px", border:"5px solid gray", padding:"8px"}} className='mx-auto'/>
                        <h2 className='text-secondary'>{selectedItem?.name}</h2>
                        <p className='text-secondary'>{selectedItem?.discription}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;