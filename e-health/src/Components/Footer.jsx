
import React from 'react';

function Footer() {
    return (
        <div className="flex flex-col px-12 py-16 bg-white max-md:px-5">
        <div className="flex gap-5 justify-between items-start max-md:flex-wrap max-md:pr-5 max-md:mr-1.5 max-md:max-w-full">
          <div className="flex flex-col self-end mt-6 max-md:max-w-full">
            <div className="text-4xl text-blue-950 max-md:max-w-full">
              Health Medical &<br />
              Healthcare Center
            </div>
            <div className="mt-12 text-6xl font-semibold text-blue-900 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              Be Our Subcribers
            </div>
            <div className="mx-7 mt-6 text-xl mb-8 text-black text-opacity-90 max-md:mr-2.5 max-md:max-w-full">
              to get the latest news about health from our experts
            </div>
          </div>
          <div className="flex flex-col  text-4xl text-blue-900">
            <ul className='flex flex-col gap-6'>
                <li>  <a href=""> About us</a></li>
                <li><a href="">Departments</a></li>
                <li><a href="">Doctors</a></li>
                <li><a href="">Appointments</a></li>
            </ul>
           
          </div>
        </div>
        <div className="rounded-full flex  gap-10  my-5 self-start px-8 py-4 mt-2 text-xl font-semibold rounded-3xl border-2 border-blue-400 border-solid text-black text-opacity-50 max-md:px-5">
         <input type="text" placeholder=' example@gmail.com' className="justify-center rounded-full items-start self-start px-8 py-4 mt-2 text-xl font-semibold rounded-3xl border-2 border-blue-400 border-solid text-black text-opacity-50 max-md:px-5" />
      
           
          <button>   <div className="flex gap-4 py-5 rounded-full  pr-16 pl-8 text-3xl text-white bg-blue-600 rounded-[40px] max-md:px-5">
            <div className="flex-auto">Submit</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fed2dc03ccccb57a5368f344367154f72abd8b8eccba9dd155c67b7d60b957c?apiKey=37ec813b063f430c8cec37fffc22655e&"
              className="shrink-0 w-7 aspect-[1.08] fill-white"
            />
          </div></button>
       
        </div>
        <div className="flex gap-5 justify-between self-end mt-52 max-w-full w-[841px] max-md:flex-wrap max-md:mt-10 max-md:mr-1.5">
          <div className="flex gap-1.5 self-start text-base text-black">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb6c9420bb7f64098c22129685d1145248d08a9ef722568ed60112a0ada01e2a?apiKey=37ec813b063f430c8cec37fffc22655e&"
              className="shrink-0 w-6 aspect-square fill-black"
            />
          
          </div>
          <div className="flex gap-5 justify-between">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e2b845a40bd94a2a9b8fd9a3a05bada4dcb394d443154d1140e3817597b6e88?apiKey=37ec813b063f430c8cec37fffc22655e&"
              className="shrink-0 self-start aspect-[0.93] fill-black w-[26px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fa3fb0d8c8fe8a6c40061b18554e5df4633ca44183852856020c711ec125e45?apiKey=37ec813b063f430c8cec37fffc22655e&"
              className="shrink-0 my-auto aspect-[1.2] fill-black w-[30px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0b15331c000b85c8b4c5d2c4d692042ab9defbdedeee0bed0e267105cac7a95?apiKey=37ec813b063f430c8cec37fffc22655e&"
              className="shrink-0 w-7 aspect-[0.9] fill-black"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee61344fe360d708ee25939f734a9de1df3a82abeb33d63b4e9581d7241e49ec?apiKey=37ec813b063f430c8cec37fffc22655e&"
              className="shrink-0 aspect-[0.48] fill-black w-[15px]"
            />
          </div>
          
        </div>
        <div className="flex-auto">
             &copy; Copyright 2024. YOUR HEALTH Rights Reserved.{" "}
            </div>
      </div>
    );
}

export default Footer;