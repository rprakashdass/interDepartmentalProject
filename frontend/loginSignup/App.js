import React, { useState } from 'react';
import './App.css';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

function App() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="App">
      {showSignup ? <SignupPage /> : <LoginPage onSignupClick={() => setShowSignup(true)} />}
    </div>
  );
}

export default App;
