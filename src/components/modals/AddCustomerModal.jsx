// src/components/Modal.jsx
import React from "react";
import { FaTimes } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const AddCustomerModal = ({ isVisible, onClose, title, children }) => {
  // Close modal when clicking outside or on the close button
  const { theme } = useTheme();
  const handleClose = (e) => {
    if (e.target.id === "modal-overlay" || e.target.tagName === "BUTTON") {
      onClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleClose}
    >
      <div className="bg-white light:bg-dark-background p-6 rounded-lg shadow-lg w-11/12 max-w-lg relative">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className={`text-lg font-semibold text-dark-text light:text-light-text`}>
            Add Customer
          </h2>
          <button className="text-gray-600 dark:text-light-text hover:text-gray-800 dark:hover:text-white">
            <FaTimes />
          </button>
        </div>

        {/* Modal Body */}
        <div>
          <h1>Hello world</h1>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end pt-4 mt-4 border-t">
          <button
            className="bg-gray-300 dark:bg-gray-700 dark:text-light-text px-4 py-2 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCustomerModal;
