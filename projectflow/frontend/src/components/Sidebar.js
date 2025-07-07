import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      path: '/',
      icon: '🏠',
      label: 'Dashboard',
      active: location.pathname === '/'
    },
    {
      path: '/projects',
      icon: '📁',
      label: 'Projects',
      active: location.pathname === '/projects'
    },
    {
      path: '/tasks',
      icon: '✅',
      label: 'Tasks',
      active: location.pathname === '/tasks'
    },
    {
      path: '/team',
      icon: '👥',
      label: 'Team',
      active: location.pathname === '/team'
    },
    {
      path: '/calendar',
      icon: '📅',
      label: 'Calendar',
      active: location.pathname === '/calendar'
    },
    {
      path: '/reports',
      icon: '📊',
      label: 'Reports',
      active: location.pathname === '/reports'
    },
    {
      path: '/settings',
      icon: '⚙️',
      label: 'Settings',
      active: location.pathname === '/settings'
    }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Menu</h3>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <Link 
            key={item.path} 
            to={item.path} 
            className={`sidebar-link ${item.active ? 'active' : ''}`}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-label">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
