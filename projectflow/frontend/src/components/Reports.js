import React from 'react';
import './Reports.css';

const Reports = () => {
  const data = [
    { title: 'Total Projects', value: 12, icon: '📁', bg: 'orange' },
    { title: 'Completed Tasks', value: 127, icon: '✅', bg: 'green' },
    { title: 'Active Members', value: 8, icon: '👥', bg: 'blue' },
    { title: 'Open Issues', value: 5, icon: '⚠', bg: 'red' },
  ];

  return (
    <div className="reports-page">
      <h1>Reports & Analytics</h1>
      <p className="reports-subtitle">
        Project performance, team activity, and issue tracking.
      </p>

      <div className="report-cards">
        {data.map((report, index) => (
          <div 
            key={index} 
            className={`report-card report-${report.bg}`}
          >
            <div className="report-icon">
              {report.icon}
            </div>
            <h3>{report.title}</h3>
            <p>{report.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;