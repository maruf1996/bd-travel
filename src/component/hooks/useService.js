import { useEffect, useState } from "react";

const useService = () => {
    const [serviceItem,setServiceItem]=useState([]);

    useEffect(()=>{
        fetch('/FakeData.json')
        .then(res=>res.json())
        .then(data=>setServiceItem(data))
    },[])
    return [serviceItem];
};

export default useService;