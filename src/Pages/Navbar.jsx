import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      background: '#f0f0f0', // Light grey background
      color: '#333', // Dark grey text
      padding: '10px 0',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
      }}>
        <li><a href="/" style={{ textDecoration: 'none', color: '#333' }}>Home</a></li>
        <li><a href="/admin/login" style={{ textDecoration: 'none', color: '#333' }}>Admin</a></li>
        <li><a href="/student" style={{ textDecoration: 'none', color: '#333' }}>Student</a></li>
        <li><a href="/trainer" style={{ textDecoration: 'none', color: '#333' }}>Trainer</a></li>
        <li><a href="/feedback" style={{ textDecoration: 'none', color: '#333' }}>Feedback</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
