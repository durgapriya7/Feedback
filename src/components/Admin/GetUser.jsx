import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoHeader from '../../Pages/LogoHeader';
import Footer from '../../Pages/Footer';
import './AdminCRUD.css';

const GetUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/admin/users');
        const data = await response.json();
        if (response.ok) {
          setUsers(data.users);
        } else {
          setError(data.message || 'Error fetching users');
        }
      } catch (error) {
        setError('Error fetching users');
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <LogoHeader />
      <div className="get-users-container">
        <h2>Users List</h2>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="message">{error}</p>
        ) : (
          <table className="user-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button
                      onClick={() => navigate(`/admin/update-user/${user._id}`)}
                    >
                      Update
                    </button>
                    <button
                      onClick={() => navigate(`/admin/delete-user/${user._id}`)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className="button-group">
          <button
            type="button"
            onClick={() => navigate('/admin-dashboard')}
            className="back-button"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
      <Footer text="2025 Admin Dashboard. All rights reserved." />
    </>
  );
};

export default GetUsers;
