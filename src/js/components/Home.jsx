import React from 'react';

//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg';
import { Navbar } from './Navbar/Navbar';

//create your first component
const Home = () => {
    return (
        <>
            <Navbar />
            <Jumbotron />
            <Cards />
            <Footer />
        </>
    );
};

export default Home;
