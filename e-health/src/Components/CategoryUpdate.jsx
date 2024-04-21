import React, { useState, useEffect } from "react";
import axiosClient from "../axios";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const CategoryDetails = () => {
    const { id } = useParams();
    const [category, setCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await axiosClient.get(`/categories/${id}`);
                setCategory(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching category:", error);
                setError("Error fetching categories");
                setLoading(false);
            }
        };
        fetchCategory();
    }, [id]);

    const showToast = (message) => {
        toast.success(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };

    const updateCategory = async () => {
        try {
            const response = await axiosClient.put(
                `/categories/${id}`,
                category
            );
            setCategory(response.data.data);

            navigate("/categories");
            showToast("Category updated successfully");
        } catch (error) {
            console.error("Error updating category:", error);
            setError("Error updating category");
        }
    };

    const handleInputChange = (field, value) => {
        setCategory((prevCategory) => ({
            ...prevCategory,
            [field]: value,
        }));
    };

    return (
        <div>
            {loading && <div className="flex justify-center">Loading...</div>}
            {error && (
                <div className="text-center text-red-500">Error: {error}</div>
            )}
            {!loading && !error && category && (
                <div className="p-4">
                    <h2 className="text-2xl font-bold mb-4">
                        Category Details
                    </h2>

                    <div className="mb-4">
                        <div className="mb-4">
                            <label
                                htmlFor="abs"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Category Name:
                            </label>
                            <input
                                type="text"
                                id="category_name"
                                value={category.category_name}
                                onChange={(e) =>
                                    handleInputChange(
                                        "category_name",
                                        e.target.value
                                    )
                                }
                                className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button
                            onClick={updateCategory}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Update
                        </button>
                        <button
                            onClick={() => navigate("/categories")}
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
            <ToastContainer />
        </div>
    );
};

export default CategoryDetails;
