import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../helpers/axios";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

const BookingProfile = () => {
    const { id } = useParams();
    const [doctor, setDoctor] = useState(null);

    useEffect(() => {
        const fetchDoctorData = async () => {
            try {
                const response = await axiosClient.get(`/doctors/${id}`);
                setDoctor(response.data);
            } catch (error) {
                console.error("Error fetching doctor profile:", error);
            }
        };

        fetchDoctorData();
    }, [id]);

    const handleBookAppointment = async (shift) => {
        console.log("Shift clicked:", shift);

        const token = localStorage.getItem("userToken");
        if (!token) {
            console.error("User token not found in localStorage.");
            return;
        }

        try {
            const bookingData = {
                doctor_id: doctor.id,
                shifts: shift,
                booking_date: new Date().toISOString().split("T")[0], 
            };

            const updatedReservedSlots = [...doctor.reservedSlots, bookingData];
            setDoctor({ ...doctor, reservedSlots: updatedReservedSlots });

            const response = await axiosClient.post("/booking", bookingData, {
                headers: {
                    Authorization: `Bearer ${token}`, 
                },
            });
            toast.success("Appointment booked successfully!");
            console.log("Appointment booked successfully:", response.data);
        } catch (error) {
            console.error("Error booking appointment:", error);
            toast.error("Failed to book appointment. Please try again.");
        }
    };

    if (!doctor) {
        return <p>Loading...</p>;
    }

    return (
        <div className="max-w-4xl mx-auto py-8">
        <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-6">
                <img
                    src={`https://ui-avatars.com/api/?name=${doctor.users.name}&background=0D8ABC&color=fff&size=128`}
                    alt={doctor.users.name}
                    className="w-32 h-32 rounded-full mr-6"
                />
                <div>
                    <h2 className="text-2xl font-semibold">{doctor.users.name}</h2>
                    <p className="text-gray-600">{doctor.specialization}</p>
                </div>
            </div>
            <p className="text-gray-700 mb-6">{doctor.bio}</p>
            <h3 className="text-lg font-semibold mb-4">Available Shifts</h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
                {doctor.shifts.map((shift) => (
                    <div
                        key={shift}
                        className={`text-center border rounded-md py-2 cursor-pointer ${
                            doctor.reservedSlots.some(
                                (reserved) => reserved.shifts === shift
                            )
                                ? "border-red-500 text-red-500"
                                : "border-green-400 text-green-500"
                        }`}
                        onClick={() => handleBookAppointment(shift)}
                    >
                        <span>{shift}</span>
                    </div>
                ))}
            </div>
        </div>
        <ToastContainer />
    </div>
    );
};

export default BookingProfile;
