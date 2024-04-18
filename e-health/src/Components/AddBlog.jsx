import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../axios.js";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider.jsx";
const AddPostForm = () => {
    const { showToast } = useStateContext();
    const navigate = useNavigate();
    const { id } = useParams();

    const [blog, setBlog] = useState({
        title: "",
        content: "",
        image: null,
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const onImageChoose = (ev) => {
        const file = ev.target.files[0];

        const reader = new FileReader();
        reader.onload = () => {
            setSurvey({
                ...survey,
                image: file,
                image_url: reader.result,
            });
            ev.target.value = "";
        };
        reader.readAsDataURL(file);
    };

    const onSubmit = (ev) => {
        ev.preventDefault();

        const payload = { ...blog };
        if (payload.image) {
            payload.image = payload.image_url;
        }
        delete payload.image_url;
        let res = null;
        if (id) {
            res = axiosClient.put(`/blog${id}`, payload);
        } else {
            res = axiosClient.post("/blog", payload);
        }

        res.then((res) => {
            console.log(res);
            navigate("/");
            if (id) {
                showToast("The survey was updated");
            } else {
                showToast("The survey was created");
            }
        }).catch((err) => {
            if (err && err.response) {
                setError(err.response.data.message);
            }
            console.log(err, err.response);
        });
    };
    const onDelete = () => {

    }
  
    useEffect(() => {
      if (id) {
        setLoading(true);
        axiosClient.get(`/blog/${id}`).then(({ data }) => {
          setSurvey(data.data);
          setLoading(false);
        });
      }
    }, []);
  

    return (
        
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Add New Post</h2>
            <form onSubmit={handleSubmit}>
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
        </div>
    );
};

export default AddPostForm;
