import React from 'react';
import Carusel from './Carusel/Carusel';
import ExtraBonus from './ExtraBonus/ExtraBonus';
import ExtraSection from './ExtraSection/ExtraSection';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Carusel></Carusel>
            <Services></Services>
            <ExtraSection></ExtraSection>
            <ExtraBonus></ExtraBonus>
        </div>
    );
};

export default Home;