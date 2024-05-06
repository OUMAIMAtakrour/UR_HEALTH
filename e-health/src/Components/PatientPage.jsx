import * as React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./Logout";

function PatientPage() {
    return (
        <div className="all ml-4 my-5 flex flex-col items-start pt-6 pl-10 w-full bg-indigo-500 max-w-[1475px] rounded-[36px] max-md:pl-5 max-md:max-w-full">
            <div className="flex gap-5 w-full text-2xl  text-white max-md:flex-wrap max-md:max-w-full">
                <div className="flex gap-5 font-light">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6cb86aa9b88b76242a83fa4f488244475c96ab9b1176f7005fa90bb2c86f30e8?apiKey=37ec813b063f430c8cec37fffc22655e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6cb86aa9b88b76242a83fa4f488244475c96ab9b1176f7005fa90bb2c86f30e8?apiKey=37ec813b063f430c8cec37fffc22655e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6cb86aa9b88b76242a83fa4f488244475c96ab9b1176f7005fa90bb2c86f30e8?apiKey=37ec813b063f430c8cec37fffc22655e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6cb86aa9b88b76242a83fa4f488244475c96ab9b1176f7005fa90bb2c86f30e8?apiKey=37ec813b063f430c8cec37fffc22655e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6cb86aa9b88b76242a83fa4f488244475c96ab9b1176f7005fa90bb2c86f30e8?apiKey=37ec813b063f430c8cec37fffc22655e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6cb86aa9b88b76242a83fa4f488244475c96ab9b1176f7005fa90bb2c86f30e8?apiKey=37ec813b063f430c8cec37fffc22655e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6cb86aa9b88b76242a83fa4f488244475c96ab9b1176f7005fa90bb2c86f30e8?apiKey=37ec813b063f430c8cec37fffc22655e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6cb86aa9b88b76242a83fa4f488244475c96ab9b1176f7005fa90bb2c86f30e8?apiKey=37ec813b063f430c8cec37fffc22655e&"
                        className="shrink-0 aspect-[0.9] w-[73px]"
                    />
                </div>{" "}
                <div className="flex-auto my-auto">YOUR HEALTH</div>
                <div className="flex-auto self-start font-[275] max-md:max-w-full">
                    <ul className="flex  gap-5 my-8 flex-end">
                        <li>
                            {" "}
                            <Link to={"/blogpage"}>Blogs |</Link>
                        </li>
                        <li>
                            {" "}
                            <a href="">Appointments | </a>
                        </li>
                        <li>
                            {" "}
                            <Link to={"/doctorlist"}>Doctors |</Link>
                        </li>
                        <li className="text-black">
                            <LogoutButton />
                        </li>
                        {/* <li>
                            {" "}
                            <a href="">Profile</a>
                        </li> */}
                    </ul>
                </div>
            </div>
            <div className="mt-20 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[76%] max-md:ml-0 max-md:w-full">
                        <div className="text-8xl text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                            YOUR HEALTH IS <br />
                            OUR PRIORTY
                        </div>
                    </div>
                    <div className="flex flex-col  w-[28%] max-md:ml-0 max-md:w-full ">
                        <button className="justify-center book px-9 py-5 mt-8  text-3xl font-thin text-black  max-md:px-5 max-md:mt-10 hover:bg-green-300 ">
                            <Link to={"/doctorlist"}> Book Appointment </Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="self-center mt-14 w-full max-w-[1141px] max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-7 max-md:flex-col max-md:gap-0 mx-10">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full columns-2">
                        <div className="text-2xl font-light text-white mt-4 mx-9   max-md:mt-10 max-md:max-w-full">
                            We strive to create a welcoming and supportive
                            environment that puts our patient ease.
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="rectangle   px-1 mt-2 w-full h-64  bg-white bg-opacity-50 rounded-[500px_500px_0px_0px] max-md:mt-10 max-md:max-w-full">
                            <div className="rectangle2     px-4 w-4/3 mt-1 h-64 bg-white bg-opacity-70 rounded-[500px_500px_0px_0px] max-md:mt-10 max-md:max-w-full">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a82502f87ff9ca673a270fbbaae67986a1de31734ec932f49729b65c592894bf?apiKey=37ec813b063f430c8cec37fffc22655e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a82502f87ff9ca673a270fbbaae67986a1de31734ec932f49729b65c592894bf?apiKey=37ec813b063f430c8cec37fffc22655e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a82502f87ff9ca673a270fbbaae67986a1de31734ec932f49729b65c592894bf?apiKey=37ec813b063f430c8cec37fffc22655e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a82502f87ff9ca673a270fbbaae67986a1de31734ec932f49729b65c592894bf?apiKey=37ec813b063f430c8cec37fffc22655e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a82502f87ff9ca673a270fbbaae67986a1de31734ec932f49729b65c592894bf?apiKey=37ec813b063f430c8cec37fffc22655e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a82502f87ff9ca673a270fbbaae67986a1de31734ec932f49729b65c592894bf?apiKey=37ec813b063f430c8cec37fffc22655e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a82502f87ff9ca673a270fbbaae67986a1de31734ec932f49729b65c592894bf?apiKey=37ec813b063f430c8cec37fffc22655e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a82502f87ff9ca673a270fbbaae67986a1de31734ec932f49729b65c592894bf?apiKey=37ec813b063f430c8cec37fffc22655e&"
                                    className="z-10 heart mb-20  w-full aspect-[1.1] max-md:max-w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PatientPage;
