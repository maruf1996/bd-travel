import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const {user,logOut}=useFirebase();
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" className='p-3'>
            <Container>
                <Navbar.Brand href="#home"><span className='justify-content-end fs-1 fw-bolder text-info'>BD</span><span className='fs-1 fw-bolder text-danger'>Travel</span></Navbar.Brand>
                <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end fs-5 fw-bold">
                    <Nav.Link style={{color:"tomato"}}  as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link style={{color:"tomato"}}  as={Link} to="/about">About</Nav.Link>
                    <Nav.Link style={{color:"tomato"}}  as={Link} to="/contact">Contact</Nav.Link>
                    <Nav.Link style={{color:"tomato"}}  as={Link} to="/addService">Add Service</Nav.Link>
                    <Nav.Link style={{color:"tomato"}}  as={Link} to="/manege">Manege All Orders</Nav.Link>
                    {user?.email ?
                            <Button onClick={logOut} className='btn btn-info text-light fw-bold me-2'>Logout</Button> :
                            <Nav.Link as={Link} to="/login" className='btn btn-info text-light fw-bold me-2'>Login</Nav.Link>}
                        <Navbar.Text>
                            <a href="#login" style={{textDecoration:"none"}} className='text-teal fw-bold'>Hi! {user?.displayName}</a>
                        </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    );
};

export default Header;