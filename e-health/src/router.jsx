import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Dashboard from "./views/Dashboard";
import Home from "./views/home";
import GuestLayout from "./Components/GuestLayout";

const router = createBrowserRouter([

    {
        path:'/signup',
        element:<App/>
    },
    {
        path:'/dashboard',
        element:<Dashboard/>
    },
 
    {
        path:'/',
        element:<Home/>
    },

])
export default router ;