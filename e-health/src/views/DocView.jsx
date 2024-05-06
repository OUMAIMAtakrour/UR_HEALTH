import React from "react";
import Calendar from "../Components/DocCalendar";
import DocAside from "../Components/DocAside";
import Dash_navbar from "../Components/Dash_navbar";
import AddPostForm from "../Components/AddBlog";

function DocView(props) {
    return (
        <div>
            <Dash_navbar />
            <DocAside />
            {/* <Calendar /> */}
           
            {/* <div className="flex items-center w-1/3 rounded-xl mt-20 float-right mr-20 p-4 border-b border-gray-300 bg-gray-300">
                <img
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    alt="Profile"
                    className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                    <p className="text-base font-medium text-gray-800">
                        Patient Name
                    </p>
                    <p className="text-sm text-gray-600">email@example.com</p>
                </div>
            </div>
            <div className="flex items-center w-1/3 rounded-xl mt-10 float-right mr-20 p-4 border-b border-gray-300 bg-blue-300">
                <img
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    alt="Profile"
                    className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                    <p className="text-base font-medium text-gray-800">
                        Patient Name
                    </p>
                    <p className="text-sm text-gray-600">email@example.com</p>
                </div>
            </div>
            <div className="flex items-center w-1/3 rounded-xl mt-10 float-right mr-20 p-4 border-b border-gray-300 bg-pink-300">
                <img
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    alt="Profile"
                    className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                    <p className="text-base font-medium text-gray-800">
                        Patient Name
                    </p>
                    <p className="text-sm text-gray-600">email@example.com</p>
                </div>
            </div>
            <div className="flex items-center w-1/3 rounded-xl mt-10 float-right mr-20 p-4 border-b border-gray-300 bg-purple-300">
                <img
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    alt="Profile"
                    className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                    <p className="text-base font-medium text-gray-800">
                        Patient Name
                    </p>
                    <p className="text-sm text-gray-600">email@example.com</p>
                </div>
            </div>
            <div className="flex items-center w-1/3 rounded-xl mt-10 float-right mr-20 p-4 border-b border-gray-300 bg-purple-300">
                <img
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    alt="Profile"
                    className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                    <p className="text-base font-medium text-gray-800">
                        Patient Name
                    </p>
                    <p className="text-sm text-gray-600">email@example.com</p>
                </div>
            </div> */}
            <AddPostForm />
        </div>
    );
}

export default DocView;
