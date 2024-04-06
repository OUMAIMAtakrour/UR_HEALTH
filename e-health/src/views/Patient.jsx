
import React from 'react';
import Steps from '../Components/Steps';
import CallToAction from '../Components/CallToAction';
import Hero from '../Components/Hero';
import MyComponent from '../Components/MyComponent';


function Patient() {
    return (
        <div>
            <Hero/>
            <CallToAction/>
            <MyComponent/>
            <Steps/>
        </div>
    );
}

export default Patient;