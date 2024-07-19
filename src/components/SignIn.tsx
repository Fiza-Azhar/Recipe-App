
//original before figma

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';
import logo from '../images/logo2.png'; 


const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Add your sign-in logic here
    navigate('/home');
  };
  return (
    <div className="signin-page">
      <div className="orange-top">
        <div className="logo-container">
          <img src={logo} alt="Logo" />
          <h1 className="app-name">
          <span className="yum">YUM</span>
          <span className="quick">Quick</span>
        </h1>
        </div>
      </div>
      <div className="signin-container">
        <h2>Welcome</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignIn}>Sign In</button>
        <p style={{ textAlign: 'center' }}>
          Don't have an account? <span onClick={() => navigate('/signup')}>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;