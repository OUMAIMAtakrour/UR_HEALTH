import React, { useState, useEffect } from "react";
import axiosClient from "../helpers/axios";
import AddPostForm from "../Components/AddBlog";
import { useStateContext } from "../contexts/ContextProvider";
import { Navigate } from "react-router-dom";
const BlogCard = ({ imageSrc, title, content }) => {
    const { currentUser, userToken } = useStateContext();
    if (!userToken) {
        return <Navigate to="/signup" />;
    }
    return (
        <div className="flex flex-col bg-white rounded-lg shadow-lg w-64 h-auto">
            <img
                src={imageSrc}
                alt="Blog post image"
                className="w-full h-48 object-cover object-center rounded-t-lg  bg-cover bg-center"
            />
            <div className="px-8 py-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-gray-700">Content: {content}</p>{" "}
            </div>
        </div>
    );
};

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [hovered, setHovered] = useState(false);

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
        <div className="flex flex-col min-h-screen">
            <header
                style={{ height: `70vh` }}
                className="w-full text-center text-white text-3xl bg-indigo-500"
            >
                <div className="flex justify-between w-full text-2xl text-white max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-1 font-light">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cb86aa9b88b76242a83fa4f488244475c96ab9b1176f7005fa90bb2c86f30e8?apiKey=37ec813b063f430c8cec37fffc22655e&width=100"
                            alt=""
                            className="shrink-0 aspect-[0.9] w-[73px]"
                        />
                        <div className="my-auto">YOUR HEALTH</div>
                    </div>
                    <div className="flex mx-6 font-[275] max-md:max-w-full">
                        <ul className="flex gap-5 my-8 flex-end">
                            <li>
                                <a href="">Blogs |</a>
                            </li>
                            <li>
                                <a href="">Appointments | </a>
                            </li>
                            <li>
                                <a href="">Doctors |</a>
                            </li>
                            <li>
                                <a href="">Profile</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between self-baseline">
                    <p className="my-auto mx-auto">
                        Empower yourself with knowledge for a healthier life.
                    </p>
                    <img
                        src="src/assets/img/783446e073d1ffd141e2b0e22b54dbda.jpg"
                        alt=""
                        style={{ height: `70%`, width: `20%`, maxWidth: `50%` }}
                        className={`rounded-lg transform transition-transform duration-300 float-right translate-x-20 ${
                            hovered ? "-translate-x-20" : ""
                        }`}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    />
                </div>
            </header>

            <div className="flex flex-col flex-grow justify-center">
                <div className="bg-white py-6 rounded-lg shadow-lg mx-6 my-4 max-w-7xl flex items-center text-center">
                    <h1 className="text-6xl font-bold mx-auto">
                        Welcome to our platform
                    </h1>
                </div>
                <button
                    type="button"
                    className="bg-purple-500 text-white py-2 font-bold w-3/12 float-right rounded-md hover:bg-purple-600 focus:outline-none focus:bg-blue-600"
                >
                    Add Article
                </button>

                <div className="flex flex-wrap gap-10 px-8 py-8">
                    {blogs.length > 0 ? (
                        blogs.map((blog) => (
                            <BlogCard
                                key={blog.id}
                                imageSrc={`http://localhost:8000/storage/${blog.image}`}
                                title={blog.title}
                                content={blog.content}
                            />
                        ))
                    ) : (
                        <p>No blogs found</p>
                    )}
                    <BlogCard
                        imageSrc="src/assets/img/493727c8a3c48102359c181173600f6f.jpg"
                        title="Blog Post Title 1"
                        category="Technology"
                    />
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
