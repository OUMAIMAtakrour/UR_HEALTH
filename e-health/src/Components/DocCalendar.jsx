import React, { useState } from "react";

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const getWeekdays = () => {
        const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        const startIndex = selectedDate.getDay();
        return weekdays.slice(startIndex).concat(weekdays.slice(0, startIndex));
    };

    const getDaysInMonth = () => {
        const date = new Date(
            selectedDate.getFullYear(),
            selectedDate.getMonth() + 1,
            0
        );
        return date.getDate();
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handlePreviousMonth = () => {
        setSelectedDate(
            new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1)
        );
    };

    const handleNextMonth = () => {
        setSelectedDate(
            new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1)
        );
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-4 w-1/3 float-right mt-20 mr-4 sticky h-full">
            <div className="flex justify-between items-center mb-4">
                <button
                    className="px-4 py-2 rounded-md hover:bg-gray-200 focus:outline-none"
                    onClick={handlePreviousMonth}
                >
                    {"<"}
                </button>
                <h1 className="text-2xl font-bold">
                    {selectedDate.toLocaleString("default", { month: "long" })}{" "}
                    {selectedDate.getFullYear()}
                </h1>
                <button
                    className="px-4 py-2 rounded-md hover:bg-gray-200 focus:outline-none"
                    onClick={handleNextMonth}
                >
                    {">"}
                </button>
            </div>
            <div className="grid grid-cols-7 gap-1">
                {getWeekdays().map((weekday, index) => (
                    <div
                        key={index}
                        className="bg-gray-200 px-2 py-2 font-bold text-center rounded"
                    >
                        {weekday}
                    </div>
                ))}
                {Array.from({ length: getDaysInMonth() }, (_, i) => i + 1).map(
                    (day, index) => (
                        <div
                            key={index}
                            className={`px-4 py-2 text-center rounded-md cursor-pointer hover:bg-gray-200 ${
                                new Date(
                                    selectedDate.getFullYear(),
                                    selectedDate.getMonth(),
                                    day
                                ).getDate() === selectedDate.getDate()
                                    ? "bg-purple-500 text-white"
                                    : ""
                            }`}
                            onClick={() =>
                                handleDateChange(
                                    new Date(
                                        selectedDate.getFullYear(),
                                        selectedDate.getMonth(),
                                        day
                                    )
                                )
                            }
                        >
                            {day}
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Calendar;
