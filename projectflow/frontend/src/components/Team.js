import React from 'react';
import './Team.css';

// Import local images
import shubratImage from './images/shubrat.png';
import prachiImage from './images/prachi.jpg';
import kabirImage from './images/kabir.jpg';
import surajImage from './images/suraj.jpg';

const teamMembers = [
  {
    name: 'Shubrat Mishra',
    role: 'Project Leader, Backend Developer',
    email: 'msanjaykumar995@gmail.com',
    avatar: shubratImage  // Using imported image
  },
  {
    name: 'Prachi Birle',
    role: 'Frontend Developer',
    email: 'prachibirle99@gmail.com',
    avatar: prachiImage  // Using imported image
  },
  {
    name: 'Kabir Roy',
    role: 'Backend and Database',
    email: 'rakeshkabir@gmail.com',
    avatar: kabirImage  // Using imported image
  },
  {
    name: 'Suraj K',
    role: 'Frontend',
    email: 'david@example.com',
    avatar: surajImage  // Using imported image
  }
];

const Team = () => (
  <div className="team-page">
    <h1>Meet the Team</h1>
    <div className="team-grid">
      {teamMembers.map((member, index) => (
        <div className="team-card" key={index}>
          <img 
            src={member.avatar} 
            alt={member.name} 
            className="avatar" 
          />
          <h3>{member.name}</h3>
          <p>{member.role}</p>
          <a href={`mailto:${member.email}`}>
            Contact
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Team;