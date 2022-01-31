import React from 'react';
import { Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const Register = () => {
    const {setUser,setEmail,setPassword,setName,createNewAccount,signInUsingGoogle,setIsLoading,updateName}=useAuth();
    
    const history=useHistory();
    const location=useLocation();
    const url=location.state?.from || "/home";

    const signInWithGoogle=()=>{
        signInUsingGoogle()
        .then(result=>{
            setIsLoading(true);
            setUser(result.user);
            history.push(url);
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }

    const handleGetName=e=>{
        setName(e.target.value);
        console.log(e.target.value);
    }

    const handleGetEmail=e=>{
        setEmail(e.target.value);
        console.log(e.target.value);
    }

    const handleGetPassword=e=>{
        setPassword(e.target.value);
        console.log(e.target.value);
    }

    const handleRegistration=e=>{
        e.preventDefault();
        createNewAccount()
        .then((result) => {
            setIsLoading(true);
            setUser(result.user);
            history.push(url);
            updateName();
          })
          .finally(()=>{
            setIsLoading(false)
        })
    }

    return (
        <div className='my-5'>
           <h2 className='my-4 fw-bolder fs-1 text-success'>Please Register</h2>
           <button className='btn btn-info mb-4 py-3 text-light fw-bold w-25' onClick={signInWithGoogle}>Sign In Google</button>
            <br />
            <Form className='w-25 m-auto mb-3' onSubmit={handleRegistration}>
            <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Control onBlur={handleGetName} type="text" placeholder="Enter Your Name" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control onBlur={handleGetEmail} type="email" placeholder="Enter Your email" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Control onBlur={handleGetPassword} type="password" placeholder="Enter Your Password" required/>
            </Form.Group>
            <input type="submit" className='btn btn-info mb-4 px-5 py-3 text-light fw-bold' value="Register" />
            </Form>
            <Link to="/login" style={{textDecoration:"none", fontSize:"20px"}}>Already have an account?</Link>
        </div>
    );
};

export default Register;