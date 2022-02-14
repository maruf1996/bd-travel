import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useHistory, useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min';

const UpdatedUser = () => {
    const {id}=useParams();
    const [service,setService]=useState({});

    const location=useLocation();
    const history=useHistory();
    const urlUpdate=location.state?.from || '/home';

    useEffect(()=>{
        fetch(`http://morning-sands-16058.herokuapp.com/services/${id}`)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])

     // Update Service
     const handleNameChange = e => {
        const updatedName = e.target.value;
        const updatedService= { name: updatedName, price: service.price, img: service.img, discrip:service.discrip};
        setService(updatedService);
    }
     const handlePriceChange = e => {
        const updatedPrice = e.target.value;
        const updatedService= { price: updatedPrice, name: service.name, img: service.img, discrip:service.discrip};
        setService(updatedService);
    }
     const handleImgChange = e => {
        const updatedImg = e.target.value;
        const updatedService= { img: updatedImg, name: service.name, price: service.price, discrip:service.discrip};
        setService(updatedService);
    }
     const handleDiscripChange = e => {
        const updatedDiscrip = e.target.value;
        const updatedService= { discrip: updatedDiscrip, name: service.name, price: service.price, img:service.img};
        setService(updatedService);
    }

    const handleUpdatService=e=>{
        const url = `http://morning-sands-16058.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                alert('updated successfull');
                setService({});
                history.push(urlUpdate);
            }
            
        })
        e.preventDefault();
    }
    
    return (
        <div className="p-4">
            <h2 className='text-dark fs-1 fw-bolder pb-3'>Update By <span className='text-info'>{service.name}</span></h2>
            <div className="border border-5 border-info w-50 mx-auto py-3 px-4">
            <Form onSubmit={handleUpdatService}>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                <Col sm={12}>
                <Form.Control  type="text" onChange={handleNameChange} value={service.name || ''} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPrice">
                <Col sm={12}>
                <Form.Control  type="number" onChange={handlePriceChange} value={service.price || ''} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalAddress">
                <Col sm={12}>
                <Form.Control  type="text" onChange={handleImgChange} value={service.img || ''} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPhone">
                <Col sm={12}>
                <textarea className='w-100 py-3' onChange={handleDiscripChange} type="text" value={service.discrip || ''} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Col sm={12}>
                <Form.Control type="submit" value="Update" className='btn btn-success'/>
                </Col>
            </Form.Group>

        </Form>
            </div>
        </div>
    );
};

export default UpdatedUser;