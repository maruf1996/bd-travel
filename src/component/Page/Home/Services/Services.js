import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Servicea.css';

const Services = () => {
    const [services,setServices]=useState([]);

    useEffect(()=>{
            fetch('/FakeData.json')
            .then(res=>res.json())
            .then(data=>setServices(data))
    },[])

    return (
        <div className='container'>
            <div className="my-5">
                <h2 className='fw-bold' style={{color:"#251d58",fontSize:"50px"}}><span className='text-danger'>Our</span> Service</h2>
            </div>

                <div className="service_design">
                    {
                        services.map((service)=><Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
        </div>
    );
};

export default Services;