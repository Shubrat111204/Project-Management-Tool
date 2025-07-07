import React, { useState } from 'react';
import axios from 'axios';

const NewProjectForm = ({ onClose, onSuccess }) => {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('Planning');
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/projects", {
        title,
        dueDate,
        status,
        progress
      });
      onSuccess();
      onClose();
    } catch (error) {
      alert("Failed to create project");
      console.error(error);
    }
  };

  return (
    <div className="modal">
      <h3>New Project</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={e => setTitle(e.target.value)} 
          required 
        />
        <input 
          type="date" 
          value={dueDate} 
          onChange={e => setDueDate(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Status" 
          value={status} 
          onChange={e => setStatus(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Progress %" 
          value={progress} 
          onChange={e => setProgress(e.target.value)} 
        />

        <button type="submit">Add</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default NewProjectForm;