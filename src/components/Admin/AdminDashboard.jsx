import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';
import LogoHeader from '../../Pages/LogoHeader';
import Footer from '../../Pages/Footer';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleAddUser = () => {
    navigate('/admin/add-user');
  };

  const handleDeleteUser = () => {
    navigate('/admin/delete-user/:id');
  };

  const handleUpdateUser = () => {
    navigate('/admin/update-user/:id');
  };

  const handleGetUsers = () => {
    navigate('/admin/users');
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <>
      <LogoHeader />
      <div className="admin-dashboard-container">
        <h2 className="dashboard-title">Admin Dashboard</h2>
        <div className="button-container">
          <button onClick={handleAddUser}>Add User</button>
          <button onClick={handleDeleteUser}>Delete User</button>
          <button onClick={handleUpdateUser}>Update User</button>
          <button onClick={handleGetUsers}>Get Users</button>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <Footer text="2025 Admin Dashboard. All rights reserved." />
    </>
  );
};

export default AdminDashboard;
