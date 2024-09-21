import React, { useState } from 'react';  // useState for state management
import './App.css';  // Global styles

import NavBar from './components/NavBar';
import TaskScheduler from './components/TaskScheduler';
import TaskDetails from './components/TaskDetails';

function App() {
  // Mocked tasks data (replace with actual data fetching)
  const [tasks, setTasks] = useState([
    { id: 1, name: 'ROAD RECONSTRUCTION IN CBE', status: 'Pending', dueDate: '2024-09-21' },
    { id: 2, name: 'PIPELINE ON ROAD AREAS ', status: 'Completed', dueDate: '2024-09-22' },
    { id: 3, name: 'GAS PIPELINE IN SINGANULLUR', status: 'Pending', dueDate: '2024-09-23' },
    { id: 4, name: 'BRIDGE CONSTRUCTION OVER 5 PLACES', status: 'completed', dueDate: '2024-09-24' }
  ]);

  const handleFilter = () => {
    setTasks(tasks.filter(task => task.status === 'Pending'));
  };

  const handleSort = () => {
    setTasks([...tasks].sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate)));
  };

  return (
    <div className="App">
      <NavBar />
      <div className="main-content">
        <div className="task-scheduler-section">
          <TaskScheduler />
        </div>
        <div className="task-details-section">
          <div className="task-controls">
            <button className="filter-btn" onClick={handleFilter}>Filter</button>
            <button className="sort-btn" onClick={handleSort}>Sort</button>
          </div>
          <TaskDetails tasks={tasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
