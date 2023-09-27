import React from 'react';
import logoImage from '../../logo/dark_logo.png'
import CustomButton from '../button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export function AdminCard({ venue }) {
     const {name, media, location} = venue;
    const mediaUrl = media.length > 0 ? media[0] : logoImage;


    return (
        <div>
            <Card className="my-3 m-auto shadow-lg venue-card">
                <div className="card-image-container">
                    <Card.Img className="card-image-top" variant="top" src={mediaUrl} alt={name}/>
                </div>
                <Card.Body>
                    <Card.Title className="my-3 h2">{name.toUpperCase()}</Card.Title>
                    <p>{location.address}, {location.city}</p>
                    <p>{location.country}</p>
                    <Link to={`/admin/venue/${venue.id}`}><CustomButton label="Click for more" /></Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default AdminCard;