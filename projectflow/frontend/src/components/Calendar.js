import React from 'react';
import './Calendar.css';

const Calendar = () => {
  return (
    <div className="calendar-page">
      <h1>Project Calendar</h1>
      <p className="calendar-subtitle">
        Stay in sync with upcoming events and deadlines.
      </p>

      <div className="calendar-embed-container">
        <iframe
          title="Team Calendar"
          src="https://calendar.google.com/calendar/embed?src=en.indian%23holiday%40group.v.calendar.google.com&ctz=Asia%2FKolkata"
          style={{ border: 0 }}
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Calendar;