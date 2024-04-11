

import React from 'react';

function Stats(props) {
    return (
        <div className="grid grid-cols-4 gap-5 mb-4 mx-10">
        <div className="flex items-center justify-center h-24 rounded bg-green-700 ">
          <p className="text-2xl text-black dark:text-gray-500">
       Total Doctors
       <p>234</p>

          </p>
        </div>
        <div className="flex items-center justify-center h-24 rounded bg-blue-400">
          <p className="text-2xl text-black dark:text-gray-500">
       Total Doctors
       <p>234</p>

          </p>
        </div>
        <div className="flex items-center justify-center h-24 rounded bg-green-700">
          <p className="text-2xl text-black dark:text-gray-500">
       Total Doctors
       <p>234</p>

          </p>
        </div>
        <div className="flex items-center justify-center h-24 rounded bg-blue-400">
          <p className="text-2xl text-black dark:text-gray-500">
       Total Doctors
       <p>234</p>

          </p>
        </div>
       
      </div>
    );
}

export default Stats;