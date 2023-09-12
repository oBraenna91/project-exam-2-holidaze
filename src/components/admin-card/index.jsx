import React from 'react';
import Image from 'react-bootstrap/Image';
import logoImage from '../../logo/dark_logo.png'
import BreakfastIcon from '../icons/breakfast';
import ParkingIcon from '../icons/parking';
import PetsIcon from '../icons/pets';
import WifiIcon from '../icons/wifi';
import CustomButton from '../button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export function AdminCard({ venue }) {
     const {name, media, location, description, rating, price, meta, maxGuests} = venue;
    // const mediaUrl = media.length > 0 ? media[0] : logoImage;
    const mediaUrl = venue.media.length > 0 ? venue.media[0] : logoImage;

    console.log(venue);


    return (
        <div>
            <Card className="my-3 m-auto shadow-lg venue-card" style={{ width: '18rem' }}>
                <Card.Img className="admin-card-image" variant="top" src={mediaUrl} alt={name}/>
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





// export function VenueCard({ venue }) {
    
//   return (
//     <Card className="my-3 shadow-lg venue-card" style={{ width: '18rem' }}>
//       <Card.Img className="card-image" variant="top" src={mediaUrl} alt={venue.name}/>
//       <Card.Body>
//         <Card.Title className="my-3 h2">{venue.name.toUpperCase()}</Card.Title>
//         <Link to={`venue/${venue.id}`}><CustomButton label="Book" /></Link>
//       </Card.Body>
//     </Card>
//   );
// }

// export default VenueCard;