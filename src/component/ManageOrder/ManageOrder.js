import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageOrder = () => {
   const [services,setServices]=useState([]);

   useEffect(()=>{
       fetch('http://morning-sands-16058.herokuapp.com/services')
       .then(res=>res.json())
       .then(data=>setServices(data))
   },[])

     // DELETE an User
     const handleDeleteService=id=>{
        const proceed=window.confirm("Are you sure, you want to delete?");
        if(proceed){
         const url=`http://morning-sands-16058.herokuapp.com/services/${id}`
         fetch(url,{
             method:"DELETE"
         })
         .then(res=>res.json())
         .then(data=>{
             if(data.deletedCount>0){
                 alert('deleted successfully');
                 const remainingUsers=services.filter(service=>service._id !== id);
                 setServices(remainingUsers);
             }
         })
        }
     }

    return (
        <div className=''>
             {
                services.map(service=><div key={service._id}>
                    <div className="">
                        <div className="mx-auto my-3">
                            <img src={service.img} alt="" style={{width:"250px"}}/>
                            <Link to={`/services/update/${service._id}`}><button className='btn btn-info text-light fw-bold mx-3'>Update</button></Link>
                            <button onClick={() => handleDeleteService(service._id)} className='btn btn-info text-light fw-bold'>Delete</button>
                        </div>
                    </div>
                    </div>
                )
            }
        </div>
    );
};

export default ManageOrder;