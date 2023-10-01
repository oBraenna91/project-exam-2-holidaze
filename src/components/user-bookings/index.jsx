import React from 'react';
import Card from 'react-bootstrap/Card';
import BreakfastIcon from '../icons/breakfast';
import WifiIcon from '../icons/wifi';
import ParkingIcon from '../icons/parking';
import PetsIcon from '../icons/pets';
import NoWifiIcon from '../icons/no-wifi';
import NoPetsIcon from '../icons/no-pets';
import NoBreakfastIcon from '../icons/no-breakfast';
import NoParkingIcon from '../icons/no-parking';
import BlueLocationIcon from '../icons/location';

export function BookingCard({ booking }) {

    const { 
        guests, dateFrom, dateTo, 
        venue: {name, meta, media, location}
        } = booking;
    
    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate().toString();
        const month = (date.getMonth() + 1).toString();
        const year = date.getFullYear().toString().slice(-2);
        return `${day}/${month}/${year}`;
      }


    function renderIcons(meta) {
        const icons = [];

        if (meta.wifi) {
            icons.push(<WifiIcon key="wifi" />);
        } else {
            icons.push(<NoWifiIcon key="no-wifi" />)
        }

        if (meta.parking) {
            icons.push(<ParkingIcon key="parking" />);
          } else {
            icons.push(<NoParkingIcon key="no-parking" />);
          }
        
          if (meta.pets) {
            icons.push(<PetsIcon key="pets" />);
          } else {
            icons.push(<NoPetsIcon key="no-pets" />);
          }
        
          if (meta.breakfast) {
            icons.push(<BreakfastIcon key="breakfast" />);
          } else {
            icons.push(<NoBreakfastIcon key="no-breakfast" />);
          }
        
          return icons.map((icon, index) => (
              <div key={index} className="icon-div col-2">
                  {icon}
              </div>
          ));

    }

  return (
    <Card className="my-3 shadow-lg booking-card m-auto">
      <div className="card-image-container">
        <Card.Img className="card-image-top" variant="top" src={media} alt={name}/>
      </div>
      <Card.Body>
        <Card.Title className="my-3 h2">{name.toUpperCase()}</Card.Title>
          <div className="mb-4 d-flex m-auto justify-content-center align-items-center">
            <div className="col-1 me-2"><BlueLocationIcon /></div>
            <div className="booking-card-location">
              {location.city}, {location.country}
            </div>
          </div>
          <p className="card-p">Check-in: {formatDate(dateFrom)}</p>
          <p className="card-p">Check-out: {formatDate(dateTo)}</p>
          <p className="card-p">Guests: {guests}</p>
        <div className="d-flex my-3 justify-content-between">
                {renderIcons(meta)}
            </div>
      </Card.Body>
    </Card>
  );
}

export default BookingCard;