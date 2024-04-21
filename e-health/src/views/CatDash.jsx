import React from "react";
import Dash_navbar from "../Components/Dash_navbar";
import Aside from "../Components/aside";
import CategoryList from "../Components/CategoryList";
import ProgressForm from "../Components/CategoryForm";
function CatDash(props) {
    return (
        <div>
            {/* <Dash_navbar />
            <Aside /> */}
            <CategoryList />
            <ProgressForm />
        </div>
    );
}

export default CatDash;
