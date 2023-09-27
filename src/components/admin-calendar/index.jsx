import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export function AdminCalendar({ bookings }) {
  
  const disabledDates = [];
  bookings.forEach((booking) => {
    const startDate = new Date(booking.dateFrom);
    const endDate = new Date(booking.dateTo);
    
    let currentDate = startDate;
    while (currentDate <= endDate) {
      disabledDates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
  });

  function tileContent({ date, view }) {
    const isTileDisabled = tileDisabled({ date, view });
  
    if (isTileDisabled) {
      return (
        <div className="unavailable-circle"></div>
      );
    } else {
      return (
        <div className="available-circle"></div>
      );
    }
  }

  function tileDisabled({ date }) {
    return disabledDates.some((disabledDate) => date.getTime() === disabledDate.getTime());
  }

  return (
    <div>
      <h3 className="mt-5 mb-3">Availability</h3>
      <Calendar
      className="calendar-header" 
      tileDisabled={tileDisabled} 
      tileContent={tileContent}
      />
    </div>
  );
}

export default AdminCalendar;