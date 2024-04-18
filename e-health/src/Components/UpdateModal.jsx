import React from "react";
import "./DeleteModal.css";

function UpdateModal({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    return (
        <div className="modal-overlay  bg-white" onClick={handleOverlayClick}>
            <form class="max-w-md mx-auto bg-white w-1/2 py-5 px-4">
                <div class="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="floating_name"
                        id="floating_name"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                    />
                    <label
                        for="floating_name"
                        class="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Medicine Name
                    </label>
                </div>
                <div className="modal-buttons">
                    <button
                        id="update"
                        onClick={onConfirm}
                        className="modal-button update-button"
                    >
                        Delete
                    </button>
                    <button
                        onClick={onClose}
                        className="modal-button cancel-button"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UpdateModal;
