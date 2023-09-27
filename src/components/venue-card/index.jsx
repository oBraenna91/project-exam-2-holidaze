import React from 'react';
import CustomButton from '../button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import logoImage from '../../logo/dark_logo.png';
import RenderIcons from '../render-icons';
import BlueLocationIcon from '../icons/location';


export function VenueCard({ venue }) {

  const {name, media, id, meta, location} = venue;
  const mediaUrl = media.length > 0 ? media[0] : logoImage;

  return (
    <Card className="my-3 shadow-lg venue-card">
      <div className="card-image-container">
        <Link to={`venue/${id}`}>
          <Card.Img className="card-image-top" variant="top" src={mediaUrl} alt={name}/>
        </Link>
      </div>
      <Card.Body>
        <Card.Title className="my-3 h2">{name.toUpperCase()}</Card.Title>
        <div className="mini-location-container mb-4 d-flex m-auto justify-content-center">
            <div className="col-1 me-2">
              <BlueLocationIcon key="location-icon"/>
            </div>
            <p className="mini-location">{location.city}, {location.country}</p>
        </div>
        <RenderIcons meta={meta} />
        <Link to={`venue/${id}`}><CustomButton className="mt-4" label="More info" /></Link>
      </Card.Body>
    </Card>
  );
}

export default VenueCard;
