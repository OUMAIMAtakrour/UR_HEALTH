import React, { useState } from "react";
import DeleteModal from "./DeleteModal";
import UpdateModal from "./UpdateModal";
import { Link } from "react-router-dom";
import "./MedicineTable.css";

function MedicineTable({title,children}) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);

    const handleDeleteClick = () => {
        setShowDeleteModal(true);
    };

    const handleCloseModal = () => {
        setShowDeleteModal(false);
    };

    const handleConfirmDelete = () => {
        console.log("Item deleted!");

        handleCloseModal();
    };
    const handleUpdateClick = () => {
        setShowUpdateModal(true);
    };
    const handleClosesModal = () => {
        setShowUpdateModal(false);
    };

    const handleConfirmUpdate = () => {
        console.log("Item deleted!");
        handleCloseModal();
    };

    return (
        <div className="bg-gradient-to-r from-[#49a09d] to-[#5f2c82] mx-auto pl-0 sm:pl-44 ">
            <Link to={"/addMed"}>
                <button className="button bg-gradient-to-r py-4 px-4 from-[#499da0] to-[#adf0ed] rounded float-right  my-20">
                    Add med
                </button>
            </Link>
            <div className="flex justify-center items-center h-screen">
                <table className="medicine w-[800px] border-collapse overflow-hidden shadow-lg">
                    <thead>
                        <tr>
                            <th className="heading bg-[#55608f] p-4 text-left text-white">
                                Medicine
                            </th>
                            <th className="heading bg-[#55608f] p-4 text-left text-white">
                                Category
                            </th>
                            <th className="heading bg-[#55608f] p-4 text-left text-white">
                                Price
                            </th>
                            <th className="heading bg-[#55608f] p-4 text-left text-white">
                                Delete
                            </th>
                            <th className="heading bg-[#55608f] p-4 text-left text-white">
                                Update
                            </th>
                        </tr>
                    </thead>
                    <tbody className="med">
                        <tr className="hover:bg-white/30 transition-colors duration-300">
                            <td className="p-4 relative text-white">
                                Sample Medicine
                            </td>
                            <td className="p-4 relative text-white">
                                Sample Category
                            </td>
                            <td className="p-4 relative text-white">$10</td>
                            <td className="p-4 relative text-white">
                                <button
                                    onClick={handleDeleteClick}
                                    className="action-button delete-button"
                                >
                                    Delete
                                </button>
                            </td>
                            <td className="p-4 relative text-white">
                                <button
                                    onClick={handleUpdateClick}
                                    className="action-button update-button"
                                >
                                    edit
                                </button>
                            </td>
                        </tr>
                        <tr className="hover:bg-white/30 transition-colors duration-300">
                            <td className="p-4 relative text-white">
                                Sample Medicine
                            </td>
                            <td className="p-4 relative text-white">
                                Sample Category
                            </td>
                            <td className="p-4 relative text-white">$10</td>
                            <td className="p-4 relative text-white">
                                <button
                                    onClick={handleDeleteClick}
                                    className="action-button delete-button"
                                >
                                    Delete
                                </button>
                            </td>
                            <td className="p-4 relative text-white">
                                <button
                                    onClick={handleUpdateClick}
                                    className="action-button delete-button"
                                >
                                    edit
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <DeleteModal
                isOpen={showDeleteModal}
                onClose={handleCloseModal}
                onConfirm={handleConfirmDelete}
            />
            <UpdateModal
                isOpen={showUpdateModal}
                onClose={handleClosesModal}
                onConfirm={handleConfirmUpdate}
            />
        </div>
    );
}

export default MedicineTable;
