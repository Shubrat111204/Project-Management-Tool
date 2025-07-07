import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';
import NewProjectForm from './NewProjectForm';
import NewTaskForm from './NewTaskForm';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showTaskForm, setShowTaskForm] = useState(false);

  const fetchProjects = async () => {
    const res = await axios.get("http://localhost:5000/api/projects");
    setProjects(res.data);
  };

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:5000/api/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchProjects();
    fetchTasks();
  }, []);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return '#f44336';
      case 'Medium': return '#FF9800';
      case 'Low': return '#4CAF50';
      default: return '#757575';
    }
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return '#4CAF50';
    if (progress >= 50) return '#FF9800';
    return '#f44336';
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <div className="quick-actions">
        <button onClick={() => setShowProjectForm(true)}>New Project</button>
        <button onClick={() => setShowTaskForm(true)}>Add Task</button>
      </div>

      {showProjectForm && (
        <NewProjectForm
          onClose={() => setShowProjectForm(false)}
          onSuccess={fetchProjects}
        />
      )}

      {showTaskForm && (
        <NewTaskForm
          onClose={() => setShowTaskForm(false)}
          onSuccess={fetchTasks}
        />
      )}

      <h2>Recent Projects</h2>
      <div className="projects-list">
        {projects.map(project => (
          <div key={project._id} className="project-card">
            <h3>{project.title}</h3>
            <p>Due: {project.dueDate}</p>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${project.progress}%`, backgroundColor: getProgressColor(project.progress) }}
              ></div>
            </div>
            <p>Status: {project.status}</p>
          </div>
        ))}
      </div>

      <h2>Recent Tasks</h2>
      <div className="tasks-list">
        {tasks.map(task => (
          <div key={task._id} className="task-card">
            <h4>{task.title}</h4>
            <p>Project: {task.project}</p>
            <p>Assignee: {task.assignee}</p>
            <span
              className="priority-badge"
              style={{ backgroundColor: getPriorityColor(task.priority) }}
            >
              {task.priority}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;