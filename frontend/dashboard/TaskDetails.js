import React from 'react';
import './TaskDetails.css';  // For styling the task details

const TaskDetails = ({ tasks }) => {
  const upcomingTasks = tasks.filter(task => task.status !== 'Completed');
  const pendingTasks = tasks.filter(task => task.status === 'Pending');

  return (
    <div className="task-details">
      <h3>Upcoming Tasks</h3>
      {upcomingTasks.map((task, index) => (
        <div key={index} className="task-item">
          {task.name}
        </div>
      ))}
      
      <h3>Pending Tasks</h3>
      {pendingTasks.map((task, index) => (
        <div key={index} className="task-item">
          {task.name}
        </div>
      ))}
    </div>
  );
};

export default TaskDetails;
