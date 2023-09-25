import React from 'react';
import Card from 'react-bootstrap/Card';

export function AdminBookingCard({booking}) {

    const {created, dateFrom, dateTo, guests} = booking;

    const formattedDateFrom = new Date(dateFrom).toLocaleDateString();
    const formattedDateTo = new Date(dateTo).toLocaleDateString();
    const formattedCreated = new Date(created).toLocaleDateString();

    return (
        <Card className="my-3 ms-2 me-4 shadow-lg m-auto admin-booking-card" style={{ width: '16rem', flex: '0 0 auto' }}>
          <Card.Body>
            <p className="mt-2">Booking created:{formattedCreated}</p>
            <p>Check in: {formattedDateFrom}</p>
            <p>Check out: {formattedDateTo}</p>
            <p className="mb-2">{guests} Guests</p>
          </Card.Body>
        </Card>
      );

}

export default AdminBookingCard;