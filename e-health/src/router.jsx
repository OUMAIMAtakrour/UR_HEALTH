import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./views/Dashboard";
import Home from "./views/home";
import GuestLayout from "./Components/GuestLayout";
import Patient from "./views/Patient";
import DashUser from "./views/DashUser";
import Form from "./views/Form";
import BlogPage from "./views/BlogPage";
import DocView from "./views/DocView";
import Login from "./views/Login";
import AddMed from "./Components/AddMed";
import CatDash from "./views/CatDash";
import CategoryDetails from "./Components/CategoryUpdate";
import Signup from "./views/Signup";
import ProfilePage from "./Components/Profile";

const router = createBrowserRouter([
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },

    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/patient",
        element: <Patient />,
    },
    {
        path: "/userdash",
        element: <DashUser />,
    },
    {
        path: "/form",
        element: <Form />,
    },
    {
        path: "/Blog",
        element: <BlogPage />,
    },
    {
        path: "/doc",
        element: <DocView />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/addMed",
        element: <AddMed />,
    },
    {
        path: "/categories",
        element: <CatDash />,
    },
    {
        path: "/categoryUpdate/:id",
        element: <CategoryDetails />,
    },
    {
        path: "/profile",
        element: <ProfilePage />,
    },
]);
export default router;
