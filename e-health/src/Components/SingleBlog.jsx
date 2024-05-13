import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../helpers/axios";


const SingleArticle = ({ article }) => {
    const { title, author, authorRole, date, thumbnail, content } = article;

    return (
        <div className="w-full mx-auto py-8 px-10">
          
            <section className="">
                <div className="container mx-auto">
                    <div className="mx-auto max-w-3xl text-center"></div>
                </div>
            </section>

            <div className="w-full mx-4">
                <figure className="mb-8 flex justify-around gap-3 my-10">
                    <div className="flex flex-col justify-between">
                        <div className="flex gap-2">
                            <span className="text-blue-800 font-bold">
                                CATEGORY
                            </span>
                            <span className="text-gray-500 font-thin">
                                {date}
                            </span>
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-yesevaOne my-10">
                            {title}
                        </h1>
                        <div className="flex my-4 space-x-4 text-gray-500 font-cormorantGaramond">
                            <img
                                src={thumbnail}
                                alt={title}
                                className="rounded-full w-10 h-10 object-cover bg-cover"
                            />
                            <div className="flex flex-col">
                                <span className="text-blue-800 font-bold">
                                    {author}
                                </span>
                                <span className="">{authorRole}</span>
                            </div>
                        </div>
                    </div>
                    <img
                   
                         src={thumbnail}
                        alt={title}
                        className="w-1/2 h-2/3 mx-8 rounded-lg thumbnail"
                    />
                </figure>
                <div
                    className="article-content font-cormorantGaramond leading-loose mx-10 my-16"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
        </div>
    );
};

const SingleBlog = () => {
    const { id } = useParams(); 
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlogById = async () => {
            try {
                const response = await axiosClient.get(`/blog/${id}`);
                const blogData = response.data;
                setBlog(blogData);
            } catch (error) {
                console.error("Error fetching blog:", error);
            }
        };

        if (id) {
            fetchBlogById();
        }
    }, [id]);

    return (
        <div>
            {blog ? (
                <SingleArticle
                    article={{
                        title: blog.title,
                        author: blog.author,
                        authorRole: blog.authorRole,
                        date: blog.date,
                        thumbnail: 'http://localhost:8000/storage/blog.thumbnail',
                        content: blog.content,
                    }}
                />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default SingleBlog;



