import React from 'react';
import PatientPage from '../Components/PatientPage';
import Departments from '../Components/Departments';
import Blog from '../Components/Blog';
import Testimonials from '../Components/Testimonials';

function Home() {
    return (
        <div>
         <PatientPage/>
         <Departments/>
         <Blog/>
         <Testimonials/>
        

        </div>
    );
}

export default Home;