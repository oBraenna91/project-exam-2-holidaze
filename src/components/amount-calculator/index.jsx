import React from 'react';

function TotalAmountCalculator({ selectedBookingDates, venuePrice }) {
  // Calculate the number of milliseconds in a day
  const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

  // Destructure the start and end dates
  const [startDate, endDate] = selectedBookingDates;

  // Calculate the difference in days between the start and end dates
  const numberOfDays = Math.round((endDate - startDate) / oneDayInMilliseconds);

  // Calculate the total amount by multiplying the number of days with the venue price
  const totalAmount = numberOfDays * venuePrice;

  return (
    <div className="mb-4">
      {numberOfDays > 0 && <p>Number of nights: {numberOfDays}</p>}
      {totalAmount > 0 && <p className="total-amount">Total Amount: {totalAmount} $</p> }
    </div>
  );
}

export default TotalAmountCalculator;