import React from 'react';
import About from '../components/Home/About/About';
import Header from '../components/Home/Header/Header';
import Services from '../components/Home/Services/Services';

const Home = () => {
    return (
        <main>
            <Header></Header>
            <About></About>
           <Services></Services>
        </main>
    );
};

export default Home;