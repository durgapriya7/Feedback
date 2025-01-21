import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoHeader from '../../Pages/LogoHeader';
import Footer from '../../Pages/Footer';
import './AdminCRUD.css';

const AddUser = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAddUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    const userData = {
      name: e.target.name.value.trim(),
      email: e.target.email.value.trim(),
      password: e.target.password.value,
      role: e.target.role.value,
      isActive: true
    };

    try {
      const response = await fetch('http://localhost:5000/admin/add-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('User added successfully!');
        e.target.reset();
      } else {
        setMessage('Error adding user: ' + (data.message || 'Unknown error'));
      }
    } catch (error) {
      setMessage('Error adding user');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <LogoHeader />
      <div className="add-user-container">
        <form onSubmit={handleAddUser} className="form-container">
          <h2>Add New User</h2>
          <input type="text" name="name" placeholder="Enter user name" required autoComplete="off" />
          <input type="email" name="email" placeholder="Enter user email" required autoComplete="off" />
          <input type="password" name="password" placeholder="Enter password" required autoComplete="new-password" />
          <select name="role" required>
            <option value="student">Student</option>
            <option value="trainer">Trainer</option>
            <option value="admin">Admin</option>
          </select>
          <div className="button-group">
            <button type="submit" disabled={loading}>
              {loading ? 'Adding...' : 'Submit'}
            </button>
            <button type="button" onClick={() => navigate('/admin-dashboard')} className="back-button">
              Back to Dashboard
            </button>
          </div>
          {message && <div className="message">{message}</div>}
        </form>
      </div>
      <Footer text="2025 Admin Dashboard. All rights reserved." />
    </>
  );
};

export default AddUser;
