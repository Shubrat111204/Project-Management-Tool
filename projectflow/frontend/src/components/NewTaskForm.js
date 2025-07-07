import React, { useState } from 'react';
import axios from 'axios';

const NewTaskForm = ({ onClose, onSuccess }) => {
  const [title, setTitle] = useState('');
  const [project, setProject] = useState('');
  const [assignee, setAssignee] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/tasks", {
        title,
        project,
        assignee,
        priority
      });
      onSuccess();
      onClose();
    } catch (error) {
      alert("Failed to create task");
      console.error(error);
    }
  };

  return (
    <div className="modal">
      <h3>New Task</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={e => setTitle(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Project" 
          value={project} 
          onChange={e => setProject(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Assignee" 
          value={assignee} 
          onChange={e => setAssignee(e.target.value)} 
          required 
        />
        <select 
          value={priority} 
          onChange={e => setPriority(e.target.value)}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <button type="submit">Add</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default NewTaskForm;