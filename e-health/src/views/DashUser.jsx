import React, { useEffect, useState } from "react";
import Dash_navbar from "../Components/Dash_navbar";
import Aside from "../Components/aside";
import Calendar from "../Components/Calendar";
import MedicineTable from "../Components/MedicineTable";
import axiosClient from "../axios";
import { Link } from "react-router-dom";

const DashUser = (props) => {
    const [loading, setLoading] = useState(true);
    const [medicines, setMedicines] = useState([]);

    useEffect(() => {
        const fetchMedicines = async () => {
            const options = {
                method: "GET",
                url: "https://medicine-name-and-details.p.rapidapi.com/",
                params: { medicineName: "prolyte" },
                headers: {
                    "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
                    "X-RapidAPI-Host":
                        "medicine-name-and-details.p.rapidapi.com",
                },
            };

            try {
                const response = await axios.request(options);
                setMedicines(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching medicines:", error);
                setLoading(false);
                setMedicines([]);
            }
        };

        fetchMedicines();
    }, []);

    return (
        <div>
            {loading && <div className="flex justify-center">Loading...</div>}
            {!loading && (
                <div className="grid  text-gray-700">
                    <MedicineTable
                        title="Medicine Details"
                        className="order-1 lg:order-2"
                        style={{ animationDelay: "0.1s" }}
                    >
                        {medicines.length > 0 ? (
                            <div className="text-8xl pb-4 font-semibold flex-1 flex items-center justify-center">
                                {medicines[0].name}
                            </div>
                        ) : (
                            <div className="text-center">
                                No medicine data available
                            </div>
                        )}
                       
                    </MedicineTable>
                </div>
            )}
            <Calendar/>
        </div>
    );
};
export default DashUser;
