import React from 'react';
import './Popup.css';

const Popup = ({ taskDetails, onClose }) => {
  if (!taskDetails) return null; // If no task is clicked, return nothing

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h3>{taskDetails.title}</h3>
        <p><strong>Start Date:</strong> {taskDetails.startDate}</p>
        <p><strong>End Date:</strong> {taskDetails.endDate}</p>
        <p><strong>Location:</strong> {taskDetails.location}</p>
        <p><strong>Status:</strong> {taskDetails.status}</p>
        <p><strong>Assigned to:</strong> {taskDetails.assignedTo}</p>

        {/* Edit Button */}
        <div className="popup-actions">
          <button className="edit-btn" onClick={() => alert('DONE!')}>
            <i className="fa fa-edit"></i> Edit
          </button>
          </div>
      </div>
    </div>
  );
};

export default Popup;
