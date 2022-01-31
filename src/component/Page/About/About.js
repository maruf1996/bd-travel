import React from 'react';
import coxesbazar from '../../../images/extraPart/coxesbazar.jpeg'

const About = () => {
    return (
        <div>
             <div className="row my-5 px-5">
                <div className="col-md-5 text-end">
                    <img src={coxesbazar} alt="" style={{width:"95%", maxHeight:"95%",border:"5px solid gray", padding:"8px", borderRadius:"20px"}}/>
                </div>
                <div className="col-md-7 mt-1 text-start px-4">
                    <h1 className='fw-bold' style={{color:"#251d58",fontSize:"45px"}}>Traveling Or Travelling?</h1>
                    <p className='fs-5 fw-normal'>It’s wonderful to travel—to meet new people, see new places, experience different cultures, live life the way life is lived somewhere else. Plenty of good things are associated with travel, but there’s one particular issue that can make traveling annoying: the spelling. Travel is easy enough to spell and not at all confusing, but “traveling,” “traveler,” “traveled”? These words are a common cause of confusion because some people spell them with one L while others use two. Traveling or travelling depends on where is your audience. Traveling is the preferred spelling in the U.S. Travelling is the preferred spelling in the UK or in the Commonwealth. This American-British spelling difference carries for other forms: traveled or travelled and traveler or traveller.</p>
                </div>
            </div>
        </div>
    );
};

export default About;