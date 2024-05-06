import React, { useState, useEffect } from "react";
import axiosClient from "../helpers/axios";
import { useStateContext } from "../contexts/ContextProvider";
import { Navigate } from "react-router-dom";

const BlogCard = ({ imageSrc, title, content, category }) => {
    const [blogs, setBlogs] = useState([]);
    const categoryName = category ? category.category_name : "Uncategorized";

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axiosClient.get("/blogs");
                const responseData = response.data;
                const blogsData = responseData.data;
                setBlogs(blogsData);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <div className="flex flex-col bg-white rounded-lg shadow-lg w-64 h-auto">
            <img
                src={imageSrc}
                alt="Blog post image"
                className="w-full h-48 object-cover object-center rounded-t-lg bg-cover bg-center"
            />
            <div className="px-8 py-4">
                <h2 className="text-xl font-bold">{title}</h2>
                {/* <p className="text-black font-bold bg-gray-300 rounded-lg py-1 px-2 mb-2">
                    Category: {categoryName}
                </p> */}
                <p className="text-gray-700">Content: {content}</p>
            </div>
        </div>
    );
};

export default BlogCard;
