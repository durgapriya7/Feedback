// Feedback.jsx
import React from 'react';
import './Feedback.css';


const Feedback = () => {
  return (
    <div className="feedback-container">
      <h1>Give Feedback</h1>
      <form>
        <div className="form-group">
          <label htmlFor="studentId">Student ID:</label>
          <input type="text" id="studentId" name="studentId" required />
        </div>
        <div className="form-group">
          <label htmlFor="trainerId">Trainer ID:</label>
          <input type="text" id="trainerId" name="trainerId" required />
        </div>
        <div className="form-group">
          <label htmlFor="courseId">Course ID:</label>
          <input type="text" id="courseId" name="courseId" required />
        </div>
        <div className="form-group">
          <label htmlFor="batchId">Batch ID:</label>
          <input type="text" id="batchId" name="batchId" required />
        </div>
        <div className="form-group">
          <label htmlFor="knowledge">Knowledge:</label>
          <input type="number" id="knowledge" name="knowledge" min="1" max="5" required />
        </div>
        <div className="form-group">
          <label htmlFor="communication">Communication:</label>
          <input type="number" id="communication" name="communication" min="1" max="5" required />
        </div>
        <div className="form-group">
          <label htmlFor="punctuality">Punctuality:</label>
          <input type="number" id="punctuality" name="punctuality" min="1" max="5" required />
        </div>
        <div className="form-group">
          <label htmlFor="comments">Comments:</label>
          <textarea id="comments" name="comments" rows="4" required />
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;
