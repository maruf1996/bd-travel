import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
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
                    <NavLink className="text-decoration-none mx-2 text-danger" to="/home">Home</NavLink>
                    <NavLink className="text-decoration-none mx-2 text-danger" to="/about">About</NavLink>
                    <NavLink className="text-decoration-none mx-2 text-danger" to="/contact">Contact</NavLink>
                    {user?.email ?(
                   <>
                        <NavLink className="text-decoration-none mx-2 text-danger" to="/addService">Add Service</NavLink>
                    <NavLink className="text-decoration-none mx-2 text-danger" to="/manege">Manege All Orders</NavLink>
                    <Link to="/">
                        <Button onClick={logOut} className='btn btn-info text-light fw-bold me-2'>Logout</Button>
                    </Link>
                   </>
                    ):
                            (<NavLink to="/login" className='btn btn-info text-light fw-bold me-2'>Login</NavLink>)}
                        <Navbar.Text>
                            <a href="#login" style={{textDecoration:"none"}} className='text-info fw-bold'>Welcome: {user?.displayName}</a>
                        </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    );
};

export default Header;