import React, { useState } from 'react';
import './TaskScheduler.css';  // For task scheduler styles
import Popup from './Popup';    // Import the Popup component

const TaskScheduler = () => {
  // State to track which task is selected
  const [selectedTask, setSelectedTask] = useState(null);

  // Task details for each task
  const tasks = {
    task1: {
      title: 'TASK 1 DETAILS',
      startDate: 'October 1, 2024',
      endDate: 'November 15, 2024',
      location: 'Central Business District, Coimbatore',
      status: 'In Progress',
      assignedTo: 'Public Works Department (Head: Mr. Arun S.)'
    },
    task2: {
      title: 'TASK 2 DETAILS',
      startDate: 'September 20, 2024',
      endDate: 'December 10, 2024',
      location: 'Avinashi Road, Coimbatore',
      status: 'Pending',
      assignedTo: 'Water Supply Department (Head: Mrs. Priya K.)'
    },
    task3: {
      title: 'TASK 3 DETAILS',
      startDate: 'September 25, 2024',
      endDate: 'November 30, 2024',
      location: 'Singanallur, Coimbatore',
      status: 'In Progress',
      assignedTo: 'Gas Authority of India Limited (GAIL) (Head: Mr. Dinesh P.)'
    },
    task4: {
      title: 'TASK 4 DETAILS',
      startDate: 'October 5, 2024',
      endDate: 'February 28, 2025',
      location: 'Ukkadam Flyover, Gandhipuram Junction, Peelamedu, Coimbatore',
      status: 'Scheduled',
      assignedTo: 'Roads & Bridges Development Authority (Head: Mr. Raghav M.)'
    }
  };

  // Function to handle task click and show the popup
  const handleTaskClick = (taskId) => {
    setSelectedTask(tasks[taskId]);
  };

  // Function to close the popup when clicking outside
  const handleClosePopup = () => {
    setSelectedTask(null); // Close the popup
  };

  return (
    <div className="task-scheduler">
      <h1>TASK MANAGEMENT</h1>
      <h3>September 2024</h3>
      <div className="calendar">
        {/* Calendar grid (7 days per week) */}
        <div className="day">SUN</div>
        <div className="day">MON</div>
        <div className="day">TUES</div>
        <div className="day">WED</div>
        <div className="day">THURS</div>
        <div className="day">FRI</div>
        <div className="day">SAT</div>

        {/* Week 1 */}
        <div className="task-cell"></div>
        <div className="task-cell" onClick={() => handleTaskClick('task1')}>Task 1</div>
        <div className="task-cell"></div>
        <div className="task-cell"></div>
        <div className="task-cell"></div>
        <div className="task-cell" onClick={() => handleTaskClick('task2')}>Task 2</div>
        <div className="task-cell"></div>

        {/* Week 2 */}
        <div className="task-cell"></div>
        <div className="task-cell"></div>
        <div className="task-cell" onClick={() => handleTaskClick('task3')}>Task 3</div>
        <div className="task-cell"></div>
        <div className="task-cell" onClick={() => handleTaskClick('task4')}>Task 4</div>
        <div className="task-cell"></div>
        <div className="task-cell"></div>

        {/* Week 3 */}
        <div className="task-cell"></div>
        <div className="task-cell"></div>
        <div className="task-cell"></div>
        <div className="task-cell"></div>
        <div className="task-cell"></div>
        <div className="task-cell"></div>
        <div className="task-cell"></div>

        {/* Week 4 */}
        <div className="task-cell"></div>
        <div className="task-cell"></div>
        <div className="task-cell"></div>
        <div className="task-cell"></div>
        <div className="task-cell"></div>
        <div className="task-cell"></div>
        <div className="task-cell"></div>

        {/* Week 5 */}
        <div className="task-cell"></div>
        <div className="task-cell"></div>

        {/* Continue adding more weeks and tasks as needed */}
      </div>

      {/* Popup Component */}
      {selectedTask && <Popup taskDetails={selectedTask} onClose={handleClosePopup} />}
    </div>
  );
};

export default TaskScheduler;
