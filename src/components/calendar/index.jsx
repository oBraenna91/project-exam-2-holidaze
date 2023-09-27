import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export function MyCalendar({ venue, onDatesSelected }) {
    
    const [selectedDates, setSelectedDates] = useState([]);
    const [view, setView] = useState('month');

    const handleDateChange = (date) => {
        
        if (selectedDates.length === 0 || selectedDates.length === 2) {
        setSelectedDates([date]);
        } else if (selectedDates.length === 1 && date < selectedDates[0]) {
            setSelectedDates([date, selectedDates[0]]);
        } else {
        setSelectedDates([...selectedDates, date]);
        }
        setView(view === 'month' ? 'day' : 'month');
    };

    const bookingArray = venue.bookings;

    const disabledDates = bookingArray.reduce((dates, booking) => {
        const startDate = new Date(booking.dateFrom);
        const endDate = new Date(booking.dateTo);
      
        const dateRange = [];
        let currentDate = startDate;
      
        while (currentDate <= endDate) {
          dateRange.push(new Date(currentDate));
          currentDate.setDate(currentDate.getDate() + 1);
        }
      
        return [...dates, ...dateRange];
      }, []);
      
      function tileDisabled({ date, view }) {
        function isSameDay(date1, date2) {
            return (
              date1.getDate() === date2.getDate() &&
              date1.getMonth() === date2.getMonth() &&
              date1.getFullYear() === date2.getFullYear()
            );
          }
        if (view === 'month') {
          return disabledDates.find(dDate => isSameDay(dDate, date));
        }
      }

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

      useEffect(() => {
        onDatesSelected(selectedDates);
      }, [selectedDates, onDatesSelected]);


    return(
        <div>
            <h3 className="mt-5 mb-3">Availability</h3>
            <Calendar 
            className="calendar-header" 
            onChange={handleDateChange} 
            value={selectedDates} 
            tileDisabled={tileDisabled}
            tileContent={tileContent} 
            />
        </div>
    )
}

export default MyCalendar;