import React from 'react';
import Activity from './Activity/Activity';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import Services from './Services/Services';

const Home = () => {
    return (
        <>
            <Banner />
            <Services />
            <Gallery />
            <Activity />
        </>
    );
};

export default Home;