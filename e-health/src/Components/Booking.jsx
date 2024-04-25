import React, { useState, useRef, useEffect } from "react";

// import Calendar from "react-calendar";

const Calendar = ({ onDateSelect }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const renderDays = () => {
        const daysInMonth = new Date(
            currentMonth.getFullYear(),
            currentMonth.getMonth() + 1,
            0
        ).getDate();

        const firstDayOfMonth = new Date(
            currentMonth.getFullYear(),
            currentMonth.getMonth(),
            1
        ).getDay();

        const days = [];
        let date = 1;

        // Generate calendar rows
        for (let i = 0; i < 6; i++) {
            const week = [];

            // Generate days for each week
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDayOfMonth) {
                    // Days from the previous month
                    week.push(null);
                } else if (date > daysInMonth) {
                    // Days from the next month
                    week.push(null);
                } else {
                    // Current month days
                    const currentDate = new Date(
                        currentMonth.getFullYear(),
                        currentMonth.getMonth(),
                        date
                    );
                    week.push(currentDate);
                    date++;
                }
            }

            days.push(week);
        }

        return (
            <div className="grid grid-cols-7 gap-2 text-center">
                {days.map((week, i) => (
                    <React.Fragment key={i}>
                        {week.map((day, j) => (
                            <div
                                key={`${i}-${j}`}
                                className={`w-10 h-10 flex items-center justify-center cursor-pointer rounded-full ${
                                    !day ? "text-gray-400" : ""
                                } ${
                                    day &&
                                    day.toDateString() ===
                                        new Date().toDateString()
                                        ? "bg-blue-500 text-white"
                                        : ""
                                }`}
                                onClick={() => {
                                    if (day) {
                                        onDateSelect(day);
                                    }
                                }}
                            >
                                {day ? (
                                    <div>
                                        {/* <div className="text-xs font-semibold">{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][j]}</div> */}
                                        <div className="text-lg">
                                            {day.getDate()}
                                        </div>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        );
    };

    const prevMonth = () => {
        setCurrentMonth(
            new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
        );
    };

    const nextMonth = () => {
        setCurrentMonth(
            new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
        );
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-4 ">
            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={prevMonth}
                    className="text-gray-500 hover:text-gray-700"
                >
                    &lt;
                </button>
                <span className="font-semibold">
                    {currentMonth.toLocaleString("default", {
                        month: "long",
                        year: "numeric",
                    })}
                </span>
                <button
                    onClick={nextMonth}
                    className="text-gray-500 hover:text-gray-700"
                >
                    &gt;
                </button>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day, index) => (
                        <div
                            key={index}
                            className="text-gray-500 font-semibold"
                        >
                            {day}
                        </div>
                    )
                )}
            </div>
            {renderDays()}
        </div>
    );
};

const AppointmentPage = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [showCalendar, setShowCalendar] = useState(false);

    const handleDateClick = () => {
        setShowCalendar(!showCalendar);
    };

    return (
        <div className="flex-1 flex flex-col items-center justify-center w-screen h-auto">
            <div className="bg-white rounded-lg shadow-lg w-screen h-screen px-4 py-8">
                <div className="flex">
                    <div className="w-2/3 px-6">
                        <img
                            src="src/assets/img/65c44dca69cab286ae15dc81d0e5a6b9.jpg"
                            alt=""
                            className="w-1/3 ml-20 object-cover rounded-full"
                        />
                        <h2 className="text-lg font-semibold mb-2 py-4">
                            Dr. Jane Doe
                        </h2>
                        <p className="text-gray-600 mb-4">Family Medicine</p>
                        <p className="text-gray-700 mb-6 px-4 w-2/3">
                            Dr. Jane Doe is a board-certified family medicine
                            physician with over 10 years of experience. She is
                            passionate about providing comprehensive,
                            personalized care to her patients.
                        </p>
                    </div>
                    <div className="w-2/3 py-4 px-6">
                        <h1 className="text-2xl font-bold mb-4">
                            Available Appointment Times
                        </h1>
                        <div className="grid grid-cols-3 gap-8 mb-4">
                            <div className="text-center border border-gray-400 rounded-md py-2 ">
                                <span className="text-gray-500">9:00 AM</span>
                            </div>
                            <div className="text-center border border-gray-400 rounded-md py-2">
                                <span className="text-gray-500">10:00 AM</span>
                            </div>
                            <div className="text-center border border-gray-400 rounded-md py-2">
                                <span className="text-gray-500">11:00 AM</span>
                            </div>
                            <div className="text-center border border-gray-400 rounded-md py-2">
                                <span className="text-gray-500">1:00 PM</span>
                            </div>
                            <div className="text-center border border-gray-400 rounded-md py-2">
                                <span className="text-gray-500">2:00 PM</span>
                            </div>
                            <div className="text-center border border-gray-400 rounded-md py-2">
                                <span className="text-gray-500">3:00 PM</span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="text-gray-700 font-semibold">
                                Select a Date
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={
                                        selectedDate
                                            ? selectedDate.toLocaleDateString()
                                            : "April 24, 2023"
                                    }
                                    readOnly
                                    className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button
                                    onClick={handleDateClick}
                                    className="absolute right-2 top-2 focus:outline-none"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                                {showCalendar && (
                                    <Calendar onDateSelect={setSelectedDate} />
                                )}
                            </div>
                        </div>
                        <button className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600">
                            Book Appointment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentPage;
