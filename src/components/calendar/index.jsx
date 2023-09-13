import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export function MyCalendar({ venue, onDatesSelected }) {
    
    const [selectedDates, setSelectedDates] = useState([]); // Initialize with an empty array
    const [view, setView] = useState('month'); // Track the calendar view

    const handleDateChange = (date) => {
        
        // When no date is selected, set the start date
        if (selectedDates.length === 0 || selectedDates.length === 2) {
        setSelectedDates([date]);
        } else if (selectedDates.length === 1 && date < selectedDates[0]) {
            // When one date is already selected, and the new date is earlier, swap them
            setSelectedDates([date, selectedDates[0]]);
        } else {
        // When one date is already selected, set it as the end date
        setSelectedDates([...selectedDates, date]);
        }

        // Toggle the calendar view between 'month' and 'day' to restrict date range selection
        setView(view === 'month' ? 'day' : 'month');
    };

    const bookingArray = venue.bookings;

    const disabledDates = bookingArray.reduce((dates, booking) => {
        const startDate = new Date(booking.dateFrom);
        const endDate = new Date(booking.dateTo);
      
        // Create an array of dates between startDate and endDate
        const dateRange = [];
        let currentDate = startDate;
      
        while (currentDate <= endDate) {
          dateRange.push(new Date(currentDate));
          currentDate.setDate(currentDate.getDate() + 1);
        }
      
        // Merge dateRange into the dates array
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
        // Disable tiles in month view only
        if (view === 'month') {
          // Check if the date is in the list of disabled dates
          return disabledDates.find(dDate => isSameDay(dDate, date));
        }
      }

      useEffect(() => {
        onDatesSelected(selectedDates);
      }, [selectedDates, onDatesSelected]);


    return(
        <div>
            <h3 className="mt-5 mb-3">Availability</h3>
            <Calendar className="calendar-header" onChange={handleDateChange} value={selectedDates} tileDisabled={tileDisabled}/>
        </div>
    )
}

export default MyCalendar;