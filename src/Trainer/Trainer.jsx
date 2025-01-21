import React, { useState } from 'react';
import './Trainer.css';

const Trainer = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegisterTrainer = async (e) => {
    e.preventDefault();
    setLoading(true);
    const trainerData = {
      name: e.target.name.value.trim(),
      subject: e.target.subject.value.trim(),
      email: e.target.email.value.trim(),
      password: e.target.password.value,
    };

    try {
      const response = await fetch('http://localhost:5000/admin/register-trainer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(trainerData),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('Trainer registered successfully!');
        e.target.reset();
      } else {
        setMessage('Error registering trainer: ' + (data.message || 'Unknown error'));
      }
    } catch (error) {
      setMessage('Error registering trainer');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="trainer-container">
      <h1>Trainer Registration</h1>
      <form onSubmit={handleRegisterTrainer}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default Trainer;
