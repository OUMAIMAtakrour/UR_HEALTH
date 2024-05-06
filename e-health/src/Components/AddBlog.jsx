import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axiosClient from "../helpers/axios.js";
import { useStateContext } from "../contexts/ContextProvider.jsx";

const AddPostForm = () => {
    const { showToast } = useStateContext();
    const navigate = useNavigate();
    const { id } = useParams();

    const [formData, setFormData] = useState({
        title: "",
        content: "",
        image: null,
        category_id: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [categories, setCategories] = useState([]);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (ev) => {
        const file = ev.target.files[0];

        const reader = new FileReader();
        reader.onload = () => {
            setFormData({
                ...formData,
                image: file,
                image_url: reader.result,
            });
            ev.target.value = ""; // Clear the input field
            setError(""); // Clear the error message
        };
        reader.readAsDataURL(file);
    };

    const fetchCategories = async () => {
        try {
            const response = await axiosClient.get("/category");
            setCategories(response.data.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const onSubmit = async (ev) => {
        ev.preventDefault();

        const formDataPayload = new FormData();
        formDataPayload.append("title", formData.title);
        formDataPayload.append("content", formData.content);
        formDataPayload.append("category_id", formData.category_id);
        if (formData.image) {
            formDataPayload.append("image", formData.image);
        }

        const { image_url, ...payload } = formData;

        try {
            let res = null;
            if (id) {
                res = await axiosClient.put(`/blog/${id}`, formDataPayload);
            } else {
                res = await axiosClient.post("/blog", formDataPayload);
            }
            console.log(res);
            navigate("/doc");
            if (id) {
                showToast("The post was updated");
            } else {
                showToast("The post was created");
            }
        } catch (err) {
            if (err && err.response && err.response.data) {
                const errors = err.response.data.errors;
                if (errors && errors.image) {
                    setError(errors.image.join(", "));
                } else {
                    setError(err.response.data.message);
                }
            } else {
                console.log(err);
            }
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Add New Post</h2>
            <form onSubmit={onSubmit} method="POST">
                <div className="mb-4">
                    <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Title:
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                        className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="content"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Content:
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        value={formData.content}
                        onChange={handleInputChange}
                        rows="4"
                        required
                        className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="category"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Category:
                    </label>
                    <select
                        id="category"
                        name="category_id"
                        value={formData.category_id}
                        onChange={handleInputChange}
                        required
                        className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="" className="text-black">
                            Select Category
                        </option>
                        {categories.map(([category]) => (
                            <option key={category.id} value={category.id}>
                                {category.category_name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="image"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Image:
                    </label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleImageChange}
                        accept="image/*"
                        className="block mt-1"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    Add Post
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddPostForm;
