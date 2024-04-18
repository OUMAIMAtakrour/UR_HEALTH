import React, { useState } from "react";

import axiosClient from "../axios";
import { useStateContext } from "../contexts/ContextProvider";

function Login() {
    const { setCurrentUser, setUserToken } = useStateContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({ __html: "" });

    const onSubmit = (ev) => {
        ev.preventDefault();
        setError({ __html: "" });

        axiosClient
            .post("/login", {
                email,
                password,
            })
            .then(({ data }) => {
                setCurrentUser(data.user);
                setUserToken(data.token);
            })
            .catch((error) => {
                if (error.response) {
                    const finalErrors = Object.values(
                        error.response.data.errors
                    ).reduce((accum, next) => [...accum, ...next], []);
                    setError({ __html: finalErrors.join("<br>") });
                }
                console.error(error);
            });
    };
    return (
        <div className="h-screen md:flex">
            <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-br from-blue-400 to-green-400 i justify-around items-center hidden">
                <div>
                    <h1 className="text-white font-bold text-4xl font-sans">
                        Your Health
                    </h1>
                    <p className="text-white mt-1">Is Our Treasure</p>
                    <button
                        type="submit"
                        className="block w-28 bg-white text-blue-800 mt-4 py-2 rounded-2xl font-bold mb-2"
                    >
                        Read More
                    </button>
                </div>
                <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
                <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
                <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
                <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
            </div>
            <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
                <form className="bg-white" onSubmit={onSubmit} method="POST">
                    <h1 className="text-gray-800 font-bold text-2xl mb-1">
                        Hello Again!
                    </h1>
                    <p className="text-sm font-normal text-gray-600 mb-7">
                        Welcome Back
                    </p>
                    <input type="hidden" name="remember" defaultValue="true" />

                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                            />
                        </svg>
                        <input
                            className="pl-2 outline-none border-none"
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(ev) => setEmail(ev.target.value)}
                            placeholder="Email address"
                        />
                    </div>
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <input
                            className="pl-2 outline-none border-none"
                            placeholder="Password"
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            value={password}
                            onChange={(ev) => setPassword(ev.target.value)}
                        />
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                    htmlFor="remember-me"
                                    className="ml-2 block text-sm text-gray-900"
                                >
                                    Remember me
                                </label>
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="block w-full bg-blue-400 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
                    >
                        Login
                    </button>
                    <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
                        Forgot Password ?
                    </span>
                </form>
            </div>
        </div>
    );
}

export default Login;
