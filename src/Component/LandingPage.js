import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import Product from './Product';
import Quality from './Quality';
import Slider from './Slider';

const LandingPage = () => {
    return (
        <div>
            <Navbar/>
            <Slider/>
            <Quality/>
            <Product/>
        </div>
    );
};

export default LandingPage;