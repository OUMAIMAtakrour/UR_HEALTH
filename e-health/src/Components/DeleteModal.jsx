import React from 'react';
import './DeleteModal.css'; 

function DeleteModal({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose(); 
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal">
                <h2>Confirm Deletion</h2>
                <p>Are you sure you want to delete this item?</p>
                <div className="modal-buttons">
                    <button id='delete' onClick={onConfirm} className="modal-button delete-button">
                        Delete
                    </button>
                    <button onClick={onClose} className="modal-button cancel-button">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;
