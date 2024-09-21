import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = ({ onSignupClick }) => { // Use uppercase "L" for the component name
  const [activeForm, setActiveForm] = useState(null);

  const showForm = (formType) => {
    setActiveForm(formType);
  };

  return (
    <div className="container">
      <h2>Login / Signup</h2>
      <div className="login-options">
        <div className="login-option" onClick={() => showForm('department')}>Department</div>
        <div className="login-option" onClick={() => showForm('employee')}>Employee</div>
        <div className="login-option" onClick={() => showForm('agency')}>Agency</div>
      </div>

      {activeForm === 'department' && (
        <form id="department-form">
          <h3>Department Login</h3>
          <label htmlFor="dept-type">Department Type:</label>
          <select id="dept-type" required>
            <option value="">Select Department</option>
            <option value="road">Road</option>
            <option value="civil">Civil</option>
            <option value="water">Water</option>
            <option value="gas">Gas</option>
          </select>
          <label htmlFor="dept-city">City:</label>
          <input type="text" id="dept-city" required />
          <label htmlFor="dept-username">Username/Email:</label>
          <input type="text" id="dept-username" required />
          <label htmlFor="dept-password">Password:</label>
          <input type="password" id="dept-password" required />
          <button type="submit">Login</button>
          <p className="signup-link">New user? <span onClick={onSignupClick}>Sign up</span></p>
        </form>
      )}

      {activeForm === 'employee' && (
        <form id="employee-form">
          <h3>Employee Login</h3>
          <label htmlFor="emp-dept">Employee Department:</label>
          <select id="emp-dept" required>
            <option value="">Select Department</option>
            <option value="road">Road</option>
            <option value="civil">Civil</option>
            <option value="water">Water</option>
            <option value="gas">Gas</option>
          </select>
          <label htmlFor="emp-city">City:</label>
          <input type="text" id="emp-city" required />
          <label htmlFor="emp-username">Username/Email:</label>
          <input type="text" id="emp-username" required />
          <label htmlFor="emp-password">Password:</label>
          <input type="password" id="emp-password" required />
          <button type="submit">Login</button>
          <p className="signup-link">New user? <span onClick={onSignupClick}>Sign up</span></p>
        </form>
      )}

      {activeForm === 'agency' && (
        <form id="agency-form">
          <h3>Agency Login</h3>
          <label htmlFor="agency-work">Kind of Work:</label>
          <input type="text" id="agency-work" required />
          <label htmlFor="agency-username">Username:</label>
          <input type="text" id="agency-username" required />
          <label htmlFor="agency-password">Password:</label>
          <input type="password" id="agency-password" required />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
