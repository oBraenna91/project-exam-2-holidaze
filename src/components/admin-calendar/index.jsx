import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export function AdminCalendar({ bookings }) {
  // Create an array of all the dates within the bookings
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

  function tileDisabled({ date }) {
    // Check if the date is in the list of disabled dates
    return disabledDates.some((disabledDate) => date.getTime() === disabledDate.getTime());
  }

  return (
    <div>
      <h3 className="mt-5 mb-3">Availability</h3>
      <Calendar tileDisabled={tileDisabled} />
    </div>
  );
}

export default AdminCalendar;