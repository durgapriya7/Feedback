import React from 'react';
import LogoHeader from './LogoHeader';
import Navbar from './Navbar';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <LogoHeader />
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
