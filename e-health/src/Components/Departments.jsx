



import * as React from "react";

function Departments() {
  return (
    <div className="bg-white py-12">
     
      <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Departments
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group relative">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden group-hover:opacity-75">
              <img
                src="/pediatrics.jpg"
                alt="Pediatrics"
                className="w-full h-full object-center object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              Pediatrics
            </h3>
          </div>
          <div className="group relative">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden group-hover:opacity-75">
              <img
                               srcSet="/https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/28ea9130b8a7009693ac4ab78f908b65c55f04f9a0544790fc034e5ccca353ab?apiKey=37ec813b063f430c8cec37fffc22655e&"

                alt="Neurology"
                className="w-50 z-9 h-full object-center object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              Neurology
            </h3>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Departments


