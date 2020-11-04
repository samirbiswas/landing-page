import React from 'react';
import About from '../About/About';
import AddImage from '../AddImage/AddImage';

import Clients from '../Clients/Clients';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Services></Services>
            <Clients></Clients>
            <AddImage></AddImage>
            <Contact></Contact>
           
        </div>
    );
};

export default Home;