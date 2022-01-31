import React from 'react';
import { Carousel } from 'react-bootstrap';
import carusel1 from '../../../../images/carusel/Sundarban.png'
import carusel2 from '../../../../images/carusel/sreemangal.jpg'
import carusel3 from '../../../../images/carusel/kuakata.jpg'

const Carusel = () => {
    return (
        <>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={carusel1}
                alt="First slide"
                style={{maxHeight:" 600px",height: "100vh"}}
                />
                <Carousel.Caption>
                <h3>BD Traveling</h3>
                <p className='text-light'>Traveling is an exciting thing for lots of people. I love to travel a lot. Here are a few short and long essays on Travelling. You should share these essays ...</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={carusel2}
                alt="Second slide"
                style={{maxHeight:" 600px",height: "100vh"}}
                />

                <Carousel.Caption>
                <h3>BD Traveling</h3>
                <p className='text-light'>Traveling will be really easier for you because you will be able to connect with locals without having any problems. You will be confident when are skilled in a ...</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={carusel3}
                alt="Third slide"
                style={{maxHeight:" 600px",height: "100vh"}}
                />

                <Carousel.Caption>
                <h3>BD Traveling</h3>
                <p className='text-light'>Traveling gives us information about the places which we visit. It reveals the secrets about that place. These secrets give me the ecstasies and revelations ...</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Carusel;