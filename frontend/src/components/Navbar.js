import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <h2>ProjectFlow</h2>
        </Link>
      </div>
      <div className="navbar-nav">
        <Link 
          to="/" 
          className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
        >
          Dashboard
        </Link>
        <Link 
          to="/projects" 
          className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
        >
          Projects
        </Link>
        <Link 
          to="/tasks" 
          className={`nav-link ${location.pathname === '/tasks' ? 'active' : ''}`}
        >
          Tasks
        </Link>
        <Link 
          to="/team" 
          className={`nav-link ${location.pathname === '/team' ? 'active' : ''}`}
        >
          Team
        </Link>
        <Link 
          to="/calendar" 
          className={`nav-link ${location.pathname === '/calendar' ? 'active' : ''}`}
        >
          Calendar
        </Link>
        <Link 
          to="/reports" 
          className={`nav-link ${location.pathname === '/reports' ? 'active' : ''}`}
        >
          Reports
        </Link>
        <Link 
          to="/settings" 
          className={`nav-link ${location.pathname === '/settings' ? 'active' : ''}`}
        >
          Settings
        </Link>
      </div>
      <div className="navbar-profile">
        <div className="profile-avatar">
          <span>JS</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
