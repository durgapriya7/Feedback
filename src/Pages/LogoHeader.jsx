
import React from 'react';
import './LogoHeader.css';

const LogoHeader = () => {
  return (
    <header className="logo-header">
      <img 
        src="/logo oneteam.jpeg" 
        alt="Logo" 
        className="logo-header-logo"
      />
      <h1 className="main-title">
        Welcome to Feedback Management System
      </h1>
    </header>
  );
};

export default LogoHeader;
