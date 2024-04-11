import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Dashboard from "./views/Dashboard";
import Home from "./views/home";
import GuestLayout from "./Components/GuestLayout";
import Patient from "./views/Patient";
import DashUser from "./views/DashUser";
import Form from "./views/Form";

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
    {
        path:'/form',
        element:<Form/>
    },

])
export default router ;