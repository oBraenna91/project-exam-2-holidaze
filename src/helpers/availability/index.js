export function convertBookingsToAvailabilityData(bookings) {
    const availabilityData = {};
  
    // Iterate through the bookings array
    bookings.forEach((booking) => {
      const dateFrom = new Date(booking.dateFrom);
      const year = dateFrom.getFullYear();
      const month = dateFrom.getMonth();
  
      // Create a key for the year and month (e.g., "2023-08")
      const key = `${year}-${String(month + 1).padStart(2, '0')}`;
  
      // Initialize the array for the month if it doesn't exist
      if (!availabilityData[key]) {
        availabilityData[key] = [];
      }
  
      // Push the booking date (dateFrom) to the array for the month
      availabilityData[key].push(dateFrom.toISOString().split('T')[0]);
    });
  
    return availabilityData;
  }

export default convertBookingsToAvailabilityData;