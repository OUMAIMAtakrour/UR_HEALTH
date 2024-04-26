/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WSXviT6LP2s
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import React, { useState, useRef } from "react";
import Aside from "./aside";
import Dash_navbar from "./Dash_navbar";

// Progress component
export const Progress = ({ value, className }) => {
    return (
        <div
            className={`h-1 bg-gray-300 rounded-full ${className}`}
            style={{ width: `${value}%` }}
        />
    );
};

// Avatar components
export const AvatarImage = ({ alt, src }) => {
    return (
        <img
            alt={alt}
            src={src}
            className="w-1/2 h-full object-cover rounded-full"
        />
    );
};

export const AvatarFallback = ({ children }) => {
    return (
        <div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
            {children}
        </div>
    );
};

export const Avatar = ({ children }) => {
    return <div className="w-1/2 h-10 relative">{children}</div>;
};

// Select components
export const SelectValue = ({ placeholder }) => {
    return <span className="text-gray-500">{placeholder}</span>;
};

export const SelectTrigger = ({ ariaLabel, id, onClick }) => {
    return (
        <button
            aria-label={ariaLabel}
            id={id}
            className="flex items-center justify-between w-full px-4 py-2 text-left text-gray-700 bg-white rounded shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            onClick={onClick}
        >
            <span>Options</span>
            <svg
                className="w-5 h-5 ml-2 -mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
            >
                <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                />
            </svg>
        </button>
    );
};

export const SelectItem = ({ value, children, onClick }) => {
    return (
        <div
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0"
            onClick={() => onClick(value)}
        >
            {children}
        </div>
    );
};

export const SelectContent = ({ children }) => {
    return (
        <div
            className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
        >
            {children}
        </div>
    );
};

export const Select = ({ children, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (optionValue) => {
        onChange(optionValue);
        setIsOpen(false);
    };

    const handleOutsideClick = (event) => {
        if (selectRef.current && !selectRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <div className="relative inline-block text-left" ref={selectRef}>
            <SelectTrigger
                ariaLabel="User options"
                id="user-options"
                onClick={toggleDropdown}
            />
            {isOpen && (
                <SelectContent>
                    {React.Children.map(children, (child) => {
                        if (React.isValidElement(child)) {
                            return React.cloneElement(child, {
                                onClick: () =>
                                    handleOptionClick(child.props.value),
                            });
                        }
                        return child;
                    })}
                </SelectContent>
            )}
        </div>
    );
};

// Badge component
export const Badge = ({ variant, children }) => {
    const colors = {
        primary: "bg-indigo-100 text-indigo-800",
        secondary: "bg-gray-100 text-gray-800",
    };

    return (
        <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                colors[variant] || colors.primary
            }`}
        >
            {children}
        </span>
    );
};

// Card components
export const CardHeader = ({ className, children }) => {
    return <div className={`p-4 border-b ${className}`}>{children}</div>;
};

export const CardContent = ({ className, children }) => {
    return <div className={`p-4 ${className}`}>{children}</div>;
};

export const Card = ({ className, children }) => {
    return (
        <div className={`bg-white rounded-md shadow ${className}`}>
            {children}
        </div>
    );
};

// Button component
export const Button = ({ variant, children }) => {
    const colors = {
        primary: "bg-indigo-600 text-white hover:bg-indigo-700",
        outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
    };

    return (
        <button
            className={`px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                colors[variant] || colors.primary
            }`}
        >
            {children}
        </button>
    );
};

export default function Component() {
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (value) => {
        setSelectedOption(value);
        // Handle the selected option here
        console.log(`Selected option: ${value}`);
    };

    return (
        <div className="flex flex-col bg-white p-8">
            <div className="flex items-center justify-between border-b pb-4">
                <h1 className="text-2xl font-semibold">Profile & Settings</h1>
                <div className="flex flex-row ">
                    {/* <Progress
                        className="w-24 h-1 bg-gray-300 rounded-full mr-4"
                        value={30}
                    /> */}
                    <Avatar>
                        <AvatarImage
                            alt="Profile"
                            src="src/assets/img/65c44dca69cab286ae15dc81d0e5a6b9.jpg"
                        />
                        {/* <AvatarFallback>MO</AvatarFallback> */}
                    </Avatar>
                    <div className="flex">
                        <p className="font-semibold ">Michael Oshim</p>
                        <Select
                            value={selectedOption}
                            onChange={handleOptionChange}
                        >
                            <SelectItem value="edit">Edit Profile</SelectItem>
                            <SelectItem value="settings">Settings</SelectItem>
                            <SelectItem value="logout">Logout</SelectItem>
                        </Select>
                    </div>
                </div>
            </div>
            <div className="flex mt-6">
                <div className="w-1/3 pr-8 ">
                    <Card className="w-full border border-gray-400 bg-gray-200">
                        <CardHeader className="flex flex-col items-center border-b ">
                            <img
                                alt="Kanayo O Kanayo"
                                src="src/assets/img/65c44dca69cab286ae15dc81d0e5a6b9.jpg"
                                className="rounded-lg w-full"
                            />
                            {/* <AvatarFallback>KOK</AvatarFallback> */}
                        </CardHeader>
                        {/* <CardContent className="mt-4">
                            <h2 className="mt-2 text-lg font-semibold">
                                Kanayo O Kanayo
                            </h2>
                            <Badge variant="secondary">Tier 2</Badge>
                            <ul className="space-y-2">
                                <li>Personal Details</li>

                                <li>Get Help</li>
                                <li>Security</li>

                                <li>SMS Alerts Subscription</li>
                                <li>Terms & Privacy</li>
                                <li>FAQs</li>
                            </ul>
                        </CardContent> */}
                    </Card>
                </div>
                <div className="w-2/3 pl-4 space-y-6">
                    <div className="bg-white p-4 border border-gray-400 rounded-md">
                        <div className="flex justify-between">
                            <h3 className="text-lg font-semibold">
                                My Profile
                            </h3>
                            <Button variant="outline">Edit</Button>
                        </div>
                        <div className="grid grid-cols-3 gap-6 mt-4">
                            <p>
                                <strong>First Name</strong>
                                <br />
                                Michael
                            </p>
                            <p>
                                <strong>Middle Name</strong>
                                <br />— — —
                            </p>
                            <p>
                                <strong>Last Name</strong>
                                <br />
                                Dozie
                            </p>
                            <p>
                                <strong>Email Address</strong>
                                <br />
                                michael@gmail.com
                            </p>
                            <p>
                                <strong>Mobile Number</strong>
                                <br />
                                08156784275
                            </p>
                            <p>
                                <strong>Date Of Birth</strong>
                                <br />
                                31/5/2023
                            </p>
                            <p>
                                <strong>Gender</strong>
                                <br />
                                Male
                            </p>
                            <p>
                                <strong>Marital Status</strong>
                                <br />
                                Single
                            </p>
                            <p>
                                <strong>Residential Address</strong>
                                <br />
                                28, Ribadu Falomo Ikoyi
                            </p>
                            <p>
                                <strong>State</strong>
                                <br />
                                Lagos
                            </p>
                            <p>
                                <strong>Local Government Area</strong>
                                <br />
                                Ikoyi
                            </p>
                            <p>
                                <strong>Residency Type</strong>
                                <br />
                                Temporary
                            </p>
                        </div>
                    </div>
                    <div className="bg-white p-4 border border-gray-400 rounded-md">
                        <h3 className="text-lg font-semibold">
                            My Account Details
                        </h3>
                        <div className="grid grid-cols-3 gap-6 mt-4">
                            <p>
                                <strong>Atlas Personal Account</strong>
                                <br />
                                0859085904383
                            </p>
                            <p>
                                <strong>Atlas Referral Code</strong>
                                <br />
                                UY12345
                            </p>
                            <p>
                                <strong>Account Progress Tier</strong>
                                <br />
                                Account Tier 2
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
