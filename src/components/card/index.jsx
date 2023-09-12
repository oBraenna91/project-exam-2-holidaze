import CustomButton from '../button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import logoImage from '../../logo/dark_logo.png';


export function VenueCard({ venue }) {
    const mediaUrl = venue.media.length > 0 ? venue.media[0] : logoImage;
  return (
    <Card className="my-3 shadow-lg venue-card" style={{ width: '18rem' }}>
      <Card.Img className="card-image" variant="top" src={mediaUrl} alt={venue.name}/>
      <Card.Body>
        <Card.Title className="my-3 h2">{venue.name.toUpperCase()}</Card.Title>
        <Link to={`venue/${venue.id}`}><CustomButton label="Book" /></Link>
      </Card.Body>
    </Card>
  );
}

export default VenueCard;
