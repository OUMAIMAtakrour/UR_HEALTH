
import React from 'react';
import Steps from '../Components/Steps';
import CallToAction from '../Components/CallToAction';
import Hero from '../Components/Hero';
import OurServices from '../Components/OurServices';
import Footer from '../Components/Footer';
import Departments from '../Components/FAQ';


function Patient() {
    return (
    <>
     <Hero/> 
            <Steps/>
            <OurServices/>
            <CallToAction/>
            <Departments/>
            <Footer/>
            </>
           
           
           
    );
}

export default Patient;