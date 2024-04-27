import React, { useState } from "react";

const Departments = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const departments = [
        {
            id: 2,
            title: "Department 1",
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ee115acefa10ecbed63e15a890c39f69eb61a3b24203e8e3daa47b1e9ca7130f?apiKey=37ec813b063f430c8cec37fffc22655e&",
            icon: "https://example.com/nature1-icon.svg",
        },
        {
            id: 2,
            title: "Department 1",
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&",
            icon: "https://example.com/nature1-icon.svg",
        },
        {
            id: 2,
            title: "Department 1",
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&",
            icon: "https://example.com/nature1-icon.svg",
        },
        {
            id: 2,
            title: "Department 1",
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&",
            icon: "https://example.com/nature1-icon.svg",
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="bg-gray-100 py-10 h-1/2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Our Departments
                </h2>
                <div className="flex flex-row gap-1">
                    {departments.map((department, index) => (
                        <div
                            key={department.id}
                            className={`relative rounded-lg cursor-pointer ${
                                activeIndex === index
                                    ? "w-full sm:w-3/4 md:w-2/3 transition-all h-full duration-500 ease-in-out"
                                    : "w-1/2 sm:w-1/4 md:w-1/6 transition-all h-full duration-500 ease-in-out"
                            }`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <img
                                src={department.image}
                                alt={department.title}
                                className="rounded-3xl w-full h-full"
                            />
                            <div
                                className={`absolute bottom-0 left-0 right-0  px-4 py-2  text-white transition-all duration-500 ease-in-out ${
                                    activeIndex === index
                                        ? "opacity-100 visible"
                                        : "opacity-0 invisible"
                                }`}
                            >
                                <h3 className="font-bold">
                                    {department.title}
                                </h3>
                                <img
                                    src={department.icon}
                                    alt={`${department.title} icon`}
                                    className="h-full  mt-2"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Departments;
