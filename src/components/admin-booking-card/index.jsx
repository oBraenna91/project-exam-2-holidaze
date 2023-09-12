import Card from 'react-bootstrap/Card';

export function AdminBookingCard({booking}) {

    const {created, dateFrom, dateTo, guests, id, updated} = booking;

    return (
        <Card className="my-3 ms-2 me-4 shadow-lg m-auto venue-card" style={{ width: '16rem', flex: '0 0 auto' }}>
          <Card.Body>
            <p>Booking created:{created}</p>
            <p>Check in: {dateFrom}</p>
            <p>Check out: {dateTo}</p>
            <p>{guests} Guests</p>
          </Card.Body>
        </Card>
      );

}

export default AdminBookingCard;