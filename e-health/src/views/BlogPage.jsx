import React, { useState, useEffect } from "react";
import axiosClient from "../helpers/axios";
import { Link } from "react-router-dom";
import BlogCard from "../Components/BlogCard";

const fetchBlogs = async (searchQuery = "") => {
    try {
        const response = await axiosClient.get("/blogs", {
            params: {
                query: searchQuery,
            },
        });
        const responseData = response.data;
        return responseData.data;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return [];
    }
};

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const loadBlogs = async () => {
            try {
                const blogsData = await fetchBlogs();
                setBlogs(blogsData);
                setFilteredBlogs(blogsData);
            } catch (error) {
                console.error("Error loading blogs:", error);
            }
        };
        loadBlogs();
    }, []);

    const handleSearchChange = async (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        try {
            const filteredData = await fetchBlogs(query);
            setFilteredBlogs(filteredData);
        } catch (error) {
            console.error("Error fetching filtered blogs:", error);
            setFilteredBlogs([]);
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header section */}
            <header className="w-full text-center text-white text-3xl bg-indigo-500">
                {/* Header content here */}
            </header>
            {/* Main content section */}
            <div className="flex flex-col flex-grow justify-center">
                {/* Display search input */}
                <input
                    type="text"
                    placeholder="Search blogs..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                />
                {/* Navigation to Add Blog page */}
                <Link
                    to="/Addblog"
                    className="mb-4 text-blue-500 hover:text-blue-700"
                >
                    Add New Blog
                </Link>
                {/* Display blogs based on filteredBlogs */}
                <div className="flex flex-wrap gap-10 px-8 py-8">
                {blogs.map((blog) => (
                        <BlogCard
                            key={blog.id}
                            imageSrc={`http://localhost:8000/storage/${blog.image}`}
                            title={blog.title}
                            content={blog.content}
                            category={blog.category_name} // Assuming 'category' is an object containing at least 'name'
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
