import React from 'react';
import BlueLocationIcon from '../icons/location';
import { Link } from 'react-router-dom';


export function MiniCard({ venue }) {
    const{name, location, id } = venue;
  return (
    <div className="mini-card mb-3">
        <div className="mx-1 mini-card-text-container">
            <Link to={`venue/${venue.id}`} className="text-primary">
                <p className="mini-card-text">{name.toUpperCase()}</p>
            </Link>
        </div>
        <div className="mini-card-location-container d-flex m-auto justify-content-center">
            <div className="col-1 me-2">
              <BlueLocationIcon key="location-icon"/>
            </div>
            <p className="mini-card-location">{location.city}, {location.country}</p>
        </div>
    </div>
  );
}

export default MiniCard;