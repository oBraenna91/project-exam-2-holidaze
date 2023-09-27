export function convertBookingsToAvailabilityData(bookings) {
    const availabilityData = {};
  
    bookings.forEach((booking) => {
      const dateFrom = new Date(booking.dateFrom);
      const year = dateFrom.getFullYear();
      const month = dateFrom.getMonth();
  
      const key = `${year}-${String(month + 1).padStart(2, '0')}`;
  
      if (!availabilityData[key]) {
        availabilityData[key] = [];
      }
      
      availabilityData[key].push(dateFrom.toISOString().split('T')[0]);
    });
  
    return availabilityData;
  }

export default convertBookingsToAvailabilityData;