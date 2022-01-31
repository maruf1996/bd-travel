import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="row mt-3 px-5">
                <div className="col-md-5">
                    <p>H#000 (0th Floor), Road #00, New DOHS, <br /> Jatrabari, Dhaka, Bangladesh</p>
                </div>
                <div className="col-md-4 footerLink mt-2 mb-3">
                    <h3>Company</h3>
                        <li>about</li>
                        <li>project</li>
                        <li>our team</li>
                        <li>Our blog</li>
                        <li>Contact</li>
                </div>
                <div className="col-md-3">
                    <h3>About Us</h3>
                    <p>consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas.</p>
                </div>
            </div>
            <div className="ms-5 text-light">
                <hr/>
                <p>Copyright © by || MARUF BILLAH 2022</p>
            </div>
        </div>
    );
};

export default Footer;