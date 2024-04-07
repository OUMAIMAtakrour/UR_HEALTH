import React, { useState } from 'react';

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const renderMonth = (month) => {
    const firstDayOfMonth = new Date(month.getFullYear(), month.getMonth(), 1);
    const lastDayOfMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const firstDayOfWeek = firstDayOfMonth.getDay(); 

    const weeks = [];
    let days = [];


    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(null);
    }

  
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(month.getFullYear(), month.getMonth(), day));
    }


    while (days.length > 0) {
      weeks.push(days.splice(0, 7));
    }

    return (
      <div className="grid grid-cols-7 gap-1">
        {weeks.map((week, weekIndex) => (
          <React.Fragment key={weekIndex}>
            {week.map((day, dayIndex) => (
              <button
                key={dayIndex}
                className={`whitespace-nowrap ${
                  isSameDay(day, currentDate) ? 'bg-primary' : 'bg-white'
                } hover:bg-gray-light active:bg-gray-dark text-center cursor-pointer rounded-sm`}
                onClick={() => {
                  if (day) {
                    handleDateChange(day);
                  }
                }}
              >
                {day ? day.getDate() : ''}
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    );
  };

  const isSameDay = (dateA, dateB) => {
    return (
      dateA &&
      dateB &&
      dateA.getDate() === dateB.getDate() &&
      dateA.getMonth() === dateB.getMonth() &&
      dateA.getFullYear() === dateB.getFullYear()
    );
  };

  return (
    <div className="max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      <h1 className="text-2xl font-bold">{currentDate.toLocaleDateString()}</h1>
      <div className="my-4">
        <h2 className="text-lg font-semibold">Selected date:</h2>
        <div className="my-2">{selectedDate.toLocaleDateString()}</div>
      </div>
      <div className="w-full border rounded border-primary my-4">
        {renderMonth(currentDate)}
      </div>
    </div>
  );
}

export default Calendar;
