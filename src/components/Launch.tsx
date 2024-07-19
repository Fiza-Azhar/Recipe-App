import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Launch.css';
import logo from '../images/logo2.png'; 

const LaunchPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="launch-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="app-name">
          <span className="yum">YUM</span>
          <span className="quick">Quick</span>
        </h1>
        <p className="subtitle">Get ready to organize and track your favorite</p>
        <p className="subtitle"> recipes!</p>
      </div>
      <div className="button-container">
        <button onClick={() => navigate('/signin')} className="launch-button">
          Sign In
        </button>
        <button onClick={() => navigate('/signup')} className="launch-button">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LaunchPage;
