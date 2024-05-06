import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../helpers/axios";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axiosClient.get("/doctors?with=user");
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
      <div className="grid grid-cols-3 gap-4 mx-3 my-10">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="border rounded-lg p-4 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">
              Dr. {doctor.users ? doctor.users.name : "Doctor Name"}
            </h3>
            <p className="text-gray-600 mb-4">
              About: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus eget dolor a libero condimentum luctus.
            </p>
            <Link
              to={`/doctor/${doctor.id}`}
              className="text-blue-500 hover:underline"
            >
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;