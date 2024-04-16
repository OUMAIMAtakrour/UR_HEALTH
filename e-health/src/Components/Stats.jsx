

import React from 'react';

function Stats(props) {
  const block1={
    backgroundColor:'#009240ff',
  }
    return (
        <div className="grid grid-cols-4 gap-5 mb-4 mx-10">
        <div className="flex items-center justify-center h-24 rounded bg-white shadow-lg">
          <p className="text-2xl text-black">
       Total Doctors
       <p>234</p>

          </p>
        </div>
        <div className="flex items-center justify-center h-24 rounded bg-white shadow-lg">
          <p className="text-2xl text-black ">
       Total Doctors
       <p>234</p>

          </p>
        </div>
        <div className="flex items-center justify-center h-24 rounded bg-white shadow-lg">
          <p className="text-2xl text-black ">
       Total Doctors
       <p>234</p>

          </p>
        </div>
        <div className="flex items-center justify-center h-24 rounded bg-white shadow-lg">
          <p className="text-2xl text-black ">
       Total Doctors
       <p>234</p>

          </p>
        </div>
       
      </div>
    );
}

export default Stats;