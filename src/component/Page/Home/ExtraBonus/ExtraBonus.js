import React from 'react';
import extra1 from '../../../../images/extraPart/extra1.jpeg'
import extra2 from '../../../../images/extraPart/extra2.jpg'
import extra3 from '../../../../images/extraPart/extra3.jpg'
import review1 from '../../../../images/review/review1.jpg'
import review2 from '../../../../images/review/review2.jpg'
import review3 from '../../../../images/review/review3.jpg'

const ExtraBonus = () => {
    return (
        <div>
             <div className="container">
            <div className="py-4">
                <h2 className='fw-bold' style={{color:"#251d58",fontSize:"55px"}}>Stay Update with Travels Tips</h2>
            </div>
            <div className="row mx-auto">
            <div className="col-md-4 mb-4">
                   <div className="card border p-3">
                   <img src={extra1} alt="" className='img-fluid'/>
                   <div className="text-start">
                    <h3 className='my-2'>Including animation in your design system</h3>
                    <p className='fs-5'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   </div>
                   <button className='w-100 py-3 btn text-success fw-bold rounded bg-light'>See Details</button>
                   </div>
               </div>
               <div className="col-md-4 mb-4">
                   <div className="card border p-3">
                   <img src={extra2} alt="" className='img-fluid'/>
                   <div className="text-start">
                    <h3 className='my-3'>Including animation in your design system</h3>
                    <p className='fs-5'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   </div>
                   <button className='w-100 py-3 btn text-success fw-bold rounded bg-light'>See Details</button>
                   </div>
               </div>
               <div className="col-md-4 mb-4">
                   <div className="card border p-3">
                   <img src={extra3} alt="" className='img-fluid'/>
                   <div className="text-start">
                    <h3 className='my-2'>Including animation in your design system</h3>
                    <p className='fs-5'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   </div>
                   <button className='w-100 py-3 btn text-success fw-bold rounded bg-light'>See Details</button>
                   </div>
               </div>
            </div>
            </div>

            <div className="bg-light" >
            <div className="container">
            <div className="py-4 mt-3">
                <p className='fw-bold' style={{fontSize:"25px"}}>REVIEW & TESTIMONIALS</p>
                <h2 className='fw-bolder' style={{fontSize:"48px"}}>Top Reviews for Travio</h2>
            </div>
                <div className="row my-4">
                <div className="col-md-4 mx-auto">
                <div className="card border p-3">
                    <p style={{fontSize:"17px"}}>Looking for other traveling words like wanderlust? Here we got a comprehensive list with the best travel words for travel lovers! Expand your mind and vocabulary wit these words associated with vacation and adventure.</p>
                    <h2>Hasan Mahmud</h2>
                    <h4>Traveler</h4>
                    <img src={review1} alt="" className='w-75 mx-auto rounded '/>
                </div>
                </div>
                <div className="col-md-4 mx-auto">
                <div className="card border p-3">
                    <p style={{fontSize:"17px"}}>As This Travel Lover, I want to share the very best locations, activities and accommodations in each of the destinations I visit, with tips on how to save money and when to splurge, and how to travel as safely as we can. I aim...</p>
                    <h2>Labib Mahmud</h2>
                    <h4>Traveler</h4>
                    <img src={review2} alt="" className='w-75 mx-auto rounded '/>
                </div>
                </div>
                <div className="col-md-4 mx-auto">
                <div className="card border p-3">
                    <p style={{fontSize:"17px"}}>Hello! I’m Claire, a thirty-something dreamer, traveller and lost soul; wandering the Earth until I find what I’m looking for. A food, drink and life-lover, my wanderlust keeps growing by the day! I created This Travel Lover ....</p>
                    <h2>Abir Mahmud</h2>
                    <h4>Traveler</h4>
                    <img src={review3} alt="" className='w-75 mx-auto rounded '/>
                </div>
                </div>
                </div>
            </div>
            </div>

        </div>
    );
};

export default ExtraBonus;