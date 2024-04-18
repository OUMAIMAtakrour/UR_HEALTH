import React from 'react';
import PatientPage from '../Components/PatientPage';
import Departments from '../Components/Departments';
import Blog from '../Components/Blog';
import Testimonials from '../Components/Testimonials';
import Footer from '../Components/Footer';
import AddPostForm from '../Components/AddBlog';

function Home() {
    return (
        <div>
         <PatientPage/>
         <Departments/>  
        <Testimonials/>
        <AddPostForm/>
         <Blog/>
         <Footer/>
    
        

        </div>
    );
}

export default Home;