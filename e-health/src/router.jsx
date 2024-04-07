import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Dashboard from "./views/Dashboard";
import Home from "./views/home";
import GuestLayout from "./Components/GuestLayout";
import Patient from "./views/Patient";
import DashUser from "./views/DashUser";

const router = createBrowserRouter([

    {
        path:'/signup',
        element:<App/>
    },
    {
        path:'/dashboard',
        element:<Dashboard/>,
       
    },
 
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/patient',
        element:<Patient/>
    },
    {
        path:'/userdash',
        element:<DashUser/>
    },

])
export default router ;