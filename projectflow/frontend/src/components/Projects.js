import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Projects.css';

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await axios.get("http://localhost:5000/api/projects");
      setProjects(res.data);
    };
    fetchProjects();
  }, []);

  const filteredProjects = projects.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) &&
    (filter === '' || p.status === filter)
  );

  const getProgressColor = (progress) => {
    if (progress >= 90) return '#4CAF50';
    if (progress >= 60) return '#FFC107';
    return '#F44336';
  };

  return (
    <div className="projects-page">
      <h1>Projects</h1>

      {/* Search + Filter */}
      <div className="project-controls">
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select 
          value={filter} 
          onChange={e => setFilter(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="Planning">Planning</option>
          <option value="In Progress">In Progress</option>
          <option value="Review">Review</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* Project Cards */}
      <div className="project-grid">
        {filteredProjects.map(project => (
          <div key={project._id} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className={`status ${project.status.toLowerCase().replace(" ", "-")}`}>
                {project.status}
              </span>
            </div>
            <p className="deadline">Deadline: {project.dueDate}</p>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ 
                  width: `${project.progress}%`, 
                  backgroundColor: getProgressColor(project.progress) 
                }}
              ></div>
            </div>
            <p className="progress-text">{project.progress}% complete</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;