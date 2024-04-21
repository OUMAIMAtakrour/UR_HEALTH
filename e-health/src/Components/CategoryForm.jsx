import React, { useState } from "react";
import { useEffect } from "react";
import axiosClient from "../axios";
import { useNavigate, useParams } from "react-router-dom";

import { useStateContext } from "../contexts/ContextProvider";
import { v4 as uuidv4 } from "uuid";

const ProgressForm = () => {
    const { showToast } = useStateContext();
    const navigate = useNavigate();
    const { id } = useParams();
    const [category, setCategory] = useState({
        category_name: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (id) {
            setLoading(true);
            axiosClient.get(`/categories/${id}`).then(({ data }) => {
                setCategory(data.data);
                setLoading(false);
            });
        }
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
            console.log("Progress created/updated:", res.data);
            if (id) {
                showToast("The progress was updated");
            } else {
                showToast("The progress was created");
            }
            navigate("/categories");
        } catch (error) {
            if (error && error.response) {
                setError(error.response.data.message);
            }
            console.error("Error creating/updating progress:", error);
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
                            htmlFor="weight"
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
                            step="0.01"
                            required
                            className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
                    >
                        Save Progress
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProgressForm;
