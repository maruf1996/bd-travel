import { useEffect, useState } from "react";

const useService = () => {
    const [serviceItem,setServiceItem]=useState([]);

    useEffect(()=>{
        fetch('http://morning-sands-16058.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServiceItem(data))
    },[])
    return [serviceItem];
};

export default useService;