import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../helpers/axios"; 


const DoctorList = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await axiosClient.get("/doctors");
                setDoctors(response.data);
            } catch (error) {
                console.error("Error fetching doctors:", error);
            }
        };

        fetchDoctors();
    }, []);

    return (
        <div>
            <h2>List of Doctors</h2>
            <ul>
                {doctors.map((doctor) => (
                    <li key={doctor.id}>
                        <Link to={`/booking/${doctor.id}`}>
                            {doctor.users.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DoctorList;
