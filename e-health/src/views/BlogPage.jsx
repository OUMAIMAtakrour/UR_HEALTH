
import React, { useState } from 'react';

const BlogCard = ({ imageSrc, title, category }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg w-64 h-auto">
      <img
        src={imageSrc}
        alt="Blog post image"
        className="w-full h-48 object-cover object-center"
      />
      <div className="px-8 py-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-700">Category: {category}</p>
      </div>
    </div>
  );
};





function BlogPage() {
    const [hovered, setHovered] = useState(false);
  
    return (
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <header style={{ height: `70vh` }} className="w-full text-center text-white text-3xl bg-indigo-500">
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
                <li><a href="">Blogs |</a></li>
                <li><a href="">Appointments | </a></li>
                <li><a href="">Doctors |</a></li>
                <li><a href="">Profile</a></li>
              </ul>
            </div>
          </div>
          <div className='flex justify-between self-baseline'>
            <p className='my-auto mx-auto'>Empower yourself with knowledge for a healthier life.</p>
            <img
              src="src/assets/img/783446e073d1ffd141e2b0e22b54dbda.jpg"
              alt=""
              style={{ height: `70%`, width: `20%`, maxWidth: `50%` }}
              className={`rounded-lg transform transition-transform duration-300 float-right translate-x-20 ${hovered ? '-translate-x-20' : ''}`}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            />
          
          </div>
        </header>
  
        {/* Content Section */}
        <div className="flex flex-col flex-grow justify-center">
          <div className="bg-white px-8 py-4 rounded-lg shadow-lg w-full max-w-7xl flex items-center text-center">
            <h1 className="text-6xl font-bold">Welcome to our platform</h1>
          </div>
          {/* Replace with your BlogCard components */}
          <div className="flex flex-wrap gap-4 p-8">
            <BlogCard
              imageSrc="blog_post_image_1.jpg" // Replace with your blog post image
              title="Blog Post Title 1"
              category="Technology"
            />
            <BlogCard
              imageSrc="blog_post_image_2.jpg"
              title="Blog Post Title 2"
              category="Design"
            />
            <BlogCard
              imageSrc="blog_post_image_3.jpg"
              title="Blog Post Title 3"
              category="Marketing"
            />
          </div>
        </div>
      </div>
    );
  }
  
export default BlogPage;
