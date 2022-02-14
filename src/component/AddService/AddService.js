import React, { useRef } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const AddService = () => {
    const nameRef=useRef();
    const priceRef=useRef();
    const imgRef=useRef();
    const discripRef=useRef();

    const location=useLocation();
    const history=useHistory();
    const url=location.state?.from || '/home'

    const handleAddService=e=>{
        const name=nameRef.current.value;
        const price=priceRef.current.value;
        const img=imgRef.current.value;
        const discrip=discripRef.current.value;
        const newService={name,price,img,discrip};
        fetch('http://morning-sands-16058.herokuapp.com/services',{
            method:"POST",
            headers:{"content-type":"application/json"
        },
        body:JSON.stringify(newService)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert("Service added Successfully");
                e.target.reset();
                history.push(url)
            }
        })
        e.preventDefault();
    }


    return (
        <div className="p-4">
            <h2 className='text-success fs-1 fw-bolder'>Add Services</h2>
            <div className="border border-5 border-info w-50 mx-auto py-3 px-4">
            <Form onSubmit={handleAddService}>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                <Col sm={12}>
                <Form.Control ref={nameRef} type="text" placeholder="Name" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPrice">
                <Col sm={12}>
                <Form.Control ref={priceRef} type="number" placeholder="price" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalAddress">
                <Col sm={12}>
                <Form.Control ref={imgRef} type="text" placeholder="img url" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPhone">
                <Col sm={12}>
                <textarea ref={discripRef} className='w-100 py-3' type="text" placeholder="discription" />
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