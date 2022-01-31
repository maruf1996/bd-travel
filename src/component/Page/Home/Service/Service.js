import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Service = (props) => {
    const {img,price,name,discription,id}=props.service;
    return (
        <div className=' ms-3'>
            <div className="card border">
                <img src={img} alt="" style={{width:'100%',height:'250px'}}/>
                <div className="text-start p-3">
                <h3 className='my-2'>{name}</h3>
                <h3 className='my-2'>Price: ${price}</h3>
                <p className='fs-5'>{discription.slice(0,70)}</p>
                <Link to={`/service/${id}`}>
                <button className='py-2 px-3 btn-info btn'>Booking Now</button>
                </Link>
                </div>
                </div>
        </div>
    );
};

export default Service;