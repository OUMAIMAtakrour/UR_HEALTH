import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Dashboard from "./views/Dashboard";
import Home from "./views/home";
import Signup from "./views/Signup";
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
        path:'/home',
        element:<Home/>
    },
    {
        path:'/',
        element:<GuestLayout/>
    },

])
export default router ;