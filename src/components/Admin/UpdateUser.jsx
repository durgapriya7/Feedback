import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoHeader from '../../Pages/LogoHeader';
import Footer from '../../Pages/Footer';
import './AdminCRUD.css';

const UpdateUser = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    const userId = e.target.userId.value.trim();
    const userData = {
      name: e.target.name.value.trim(),
      email: e.target.email.value.trim(),
      role: e.target.role.value,
      isActive: e.target.isActive.checked
    };

    if (!userId) {
      setMessage('User ID is required');
      setLoading(false);
      return;
    }

    const updateData = {};
    Object.keys(userData).forEach(key => {
      if (userData[key] !== '') {
        updateData[key] = userData[key];
      }
    });

    try {
      const response = await fetch(`http://localhost:5000/admin/update-user/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('User updated successfully!');
        e.target.reset();
      } else {
        setMessage('Error updating user: ' + (data.message || 'Unknown error'));
      }
    } catch (error) {
      setMessage('Error updating user');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <LogoHeader />
      <div className="update-user-container">
        <form onSubmit={handleUpdateUser} className="form-container">
          <h2>Update User</h2>
          <input type="text" name="userId" placeholder="User ID" required />
          <input type="text" name="name" placeholder="New Name" />
          <input type="email" name="email" placeholder="New Email" />
          <select name="role">
            <option value="student">Student</option>
            <option value="trainer">Trainer</option>
            <option value="admin">Admin</option>
          </select>
          <div className="checkbox-group">
            <input type="checkbox" name="isActive" defaultChecked />
            <label>Is Active</label>
          </div>
          <div className="button-group">
            <button type="submit" disabled={loading}>
              {loading ? 'Updating...' : 'Update'}
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

export default UpdateUser;
