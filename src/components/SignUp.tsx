/*

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Add your sign-up logic here
    navigate('/menu');
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Sign Up</h2>
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
        <button onClick={handleSignUp}>Sign Up</button>
        <p>
          Already have an account? <span onClick={() => navigate('/signin')}>Welcome</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;


*/

// SignUp.tsx
// SignUp.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import logo from '../images/logo2.png'; // Adjust the path based on your project structure

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Add your sign-up logic here
    navigate('/home');
  };

  return (
    <div className="signup-page">
      <div className="orange-top">
        <div className="logo-container">
          <img src={logo} alt="Logo" />
          <h1 className="app-name">
            <span className="yum">YUM</span>
            <span className="quick">Quick</span>
          </h1>
        </div>
      </div>
      <div className="signup-container">
        <h2>Sign Up</h2>
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
        <button onClick={handleSignUp}>Sign Up</button>
        <p style={{ textAlign: 'center' }}>
          Already have an account? <span onClick={() => navigate('/signin')}>SignIn</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
