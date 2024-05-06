import React from "react";
import Dash_navbar from "../Components/Dash_navbar";
import Aside from "../Components/aside";
import CategoryList from "../Components/CategoryList";
import ProgressForm from "../Components/CategoryForm";
import { useStateContext } from "../contexts/ContextProvider";
import { Navigate } from "react-router-dom";
function CatDash(props) {
    // const { currentUser, userToken } = useStateContext();
    // if (!userToken) {
    //     return <Navigate to="/signup" />;
    // }
    return (
        <div>
            <Dash_navbar />
            <Aside />
            <div className="my-20 mx-auto"> <CategoryList /></div>
           
            <ProgressForm />
        </div>
    );
}

export default CatDash;
