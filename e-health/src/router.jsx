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
import Booking from "./Components/Booking";
import AddPostForm from "./Components/AddBlog";
import SingleBlog from "./Components/SingleBlog";
import DoctorList from "./Components/DoctorList";
import DoctorBlogsPage from "./Components/MyBlog";
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
        path: "/home",
        element: <Home />,
    },
    {
        path: "/",
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
        path: "/Blogpage",
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
    {
        path: "/doctor/:id",
        element: <Booking />,
    },
    {
        path: "/form",
        element: <Form />,
    },
    {
        path: "/addblog",
        element: <AddPostForm />,
    },
    {
        path: "/blog/:id",
        element: <SingleBlog />,
    },
    {
        path: "/doctorlist",
        element: <DoctorList />,
    },
    {
        path: "/myblog",
        element: <DoctorBlogsPage />,
    },
]);
export default router;
