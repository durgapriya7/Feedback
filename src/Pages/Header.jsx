import React from 'react';
import Navbar from './Navbar';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <div className="header-content">
          <img 
            src="/logo oneteam.jpeg" 
            alt="Logo" 
            className="header-logo"
          />
          <h1 className="header-welcome">
            Welcome to the Feedback Management System
          </h1>
        </div>
      </header>
      <div className="content-wrapper">
        <Navbar />
        <p className="description">
          This is the home page where users can navigate to different sections.
        </p>
      </div>
    </div>
  );
};

export default Home;