import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoHeader from '../../Pages/LogoHeader';
import Footer from '../../Pages/Footer';
import './AdminCRUD.css';

const DeleteUser = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleDeleteUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    const userId = e.target.userId.value.trim();

    if (!userId) {
      setMessage('User ID is required');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/admin/delete-user/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('User deleted successfully!');
        e.target.reset();
      } else {
        setMessage('Error deleting user: ' + (data.message || 'Unknown error'));
      }
    } catch (error) {
      setMessage('Error deleting user');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <LogoHeader />
      <div className="delete-user-container">
        <form onSubmit={handleDeleteUser} className="form-container">
          <h2>Delete User</h2>
          <input type="text" name="userId" placeholder="Enter User ID" required />
          <div className="button-group">
            <button type="submit" className="delete-btn" disabled={loading}>
              {loading ? 'Deleting...' : 'Delete'}
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

export default DeleteUser;
