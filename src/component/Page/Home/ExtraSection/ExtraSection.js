import React from 'react';
import coxesbazar from '../../../../images/extraPart/coxesbazar.jpeg';

const ExtraSection = () => {
    return (
        <div className=''>

            <div className="row my-5 px-5">
                <div className="col-md-5 text-end">
                    <img src={coxesbazar} alt="" style={{width:"95%", maxHeight:"95%",border:"5px solid gray", padding:"8px", borderRadius:"20px"}}/>
                </div>
                <div className="col-md-7 text-start mt-5">
                    <h1 className='fw-bold' style={{color:"#251d58",fontSize:"45px"}}>What is Traveling?</h1>
                    <p className='fs-5 fw-normal'>Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip.[1] Travel can also include relatively short stays between successive movements, as in the case of tourism.</p>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;