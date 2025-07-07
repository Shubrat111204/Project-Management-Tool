import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Tasks.css';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await axios.get("http://localhost:5000/api/tasks");
      setTasks(res.data);
    };
    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase()) &&
    (filter === '' || task.priority === filter)
  );

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return '#f44336';
      case 'medium':
        return '#ff9800';
      case 'low':
        return '#4caf50';
      default:
        return '#9e9e9e';
    }
  };

  return (
    <div className="tasks-page">
      <h1>Tasks</h1>

      {/* Search + Filter */}
      <div className="task-controls">
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select 
          value={filter} 
          onChange={e => setFilter(e.target.value)}
        >
          <option value="">All Priorities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      {/* Task Cards */}
      <div className="task-grid">
        {filteredTasks.map(task => (
          <div key={task._id} className="task-card">
            <div className="task-header">
              <h3>{task.title}</h3>
              <span
                className="priority"
                style={{ backgroundColor: getPriorityColor(task.priority) }}
              >
                {task.priority}
              </span>
            </div>
            <p className="task-project">
              Project: <strong>{task.project}</strong>
            </p>
            <p className="task-assignee">
              Assigned to: {task.assignee}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;