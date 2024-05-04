import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../helpers/axios";
import { useStateContext } from "../contexts/ContextProvider";

const ProgressForm = () => {
    const { showToast, currentUser } = useStateContext();
    const navigate = useNavigate();
    const { id } = useParams();
    const [category, setCategory] = useState({
        id: null,
        admin_id: currentUser ? currentUser.admin_id : null,
        category_name: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchCategory = async () => {
            if (id) {
                setLoading(true);
                try {
                    const response = await axiosClient.get(`/categories/${id}`);
                    setCategory(response.data.data);
                } catch (error) {
                    console.error("Error fetching category:", error);
                    setError("Failed to fetch category");
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchCategory();
    }, [id]);

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = null;
            if (id) {
                res = await axiosClient.put(`/categories/${id}`, category);
            } else {
                res = await axiosClient.post("/categories", category);
            }
            console.log("Category created/updated:", res.data);
            if (id) {
                showToast("The category was updated");
            } else {
                showToast("The category was created");
            }
            navigate("/categories");
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data.message);
            } else {
                setError("An error occurred");
            }
            console.error("Error creating/updating category:", error);
        }
    };

    return (
        <div>
            {loading && <div className="flex justify-center">Loading...</div>}
            {error && (
                <div className="text-center text-red-500">Error: {error}</div>
            )}
            <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
                <form onSubmit={onSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="category_name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Category Name:
                        </label>
                        <input
                            type="text"
                            id="category_name"
                            value={category.category_name}
                            onChange={(e) =>
                                setCategory({
                                    ...category,
                                    category_name: e.target.value,
                                })
                            }
                            required
                            className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
                    >
                        Save Category
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProgressForm;
