import React, { useEffect } from 'react';
import axiosClient from '../helpers/axios';
import { useStateContext } from '../contexts/ContextProvider';

const MyBlogComponent = () => {
  const { userToken, blog, setBlog } = useStateContext();

  useEffect(() => {
    const fetchMyBlog = async () => {
      try {
        const response = await axiosClient.get('/myblog', {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });

        if (Array.isArray(response.data)) {
          setBlog(response.data);
        } else {
          console.error('Unexpected API response format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching My Blog:', error);
      }
    };

    if (userToken) {
      fetchMyBlog();
    }
  }, [userToken, setBlog]);

  return (
    <div>
      <h1>Blog Page</h1>
      {blog.length > 0 ? (
        <div>
          {blog.map((blogItem) => (
            <div key={blogItem.id}>
              <h2>{blogItem.title}</h2>
              <img src={blogItem.image} alt={blogItem.title} />
              <p>{blogItem.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No blogs found.</p>
      )}
    </div>
  );
};

export default MyBlogComponent;