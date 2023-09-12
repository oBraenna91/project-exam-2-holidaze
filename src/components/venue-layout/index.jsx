import React from 'react';
import Image from 'react-bootstrap/Image';
import logoImage from '../../logo/dark_logo.png'
import BreakfastIcon from '../icons/breakfast';
import ParkingIcon from '../icons/parking';
import PetsIcon from '../icons/pets';
import WifiIcon from '../icons/wifi';

export function VenueLayout({ venue }) {
    const {name, media, location, description, rating, price, meta, maxGuests} = venue;
    const mediaUrl = media.length > 0 ? media[0] : logoImage;
    return (
        <div>
            <h1 className="my-5">{name}</h1>
            <Image src={mediaUrl} alt={name} fluid />
            <h2 className="mt-5">Location:</h2>
            <p className="venue-p">{location.address}</p>
            <p className="venue-p">{location.city} , {location.country}</p>
            <p className="venue-p my-5 mx-3">{description}</p>
            <h3 className="">Rating: {rating}</h3>
            <h3 className="">Price: {price} $</h3>
            <h3 className="">Guests: max {maxGuests}</h3>
            <div className="d-flex my-5 flex-column justify-content-center align-items-center">
                <div className="col-8 my-3 d-flex align-items-center justify-content-between">
                    <div className="col-3">
                        <WifiIcon />
                    </div>
                    <p className="my-0">WiFi included: {meta.wifi ? 'Yes' : 'No'}</p>
                </div>
                <div className="col-8 my-3 d-flex align-items-center justify-content-between">
                    <div className="col-3">
                        <PetsIcon />
                    </div>
                    <p className="my-0">Pets allowed: {meta.pets ? 'Yes' : 'No'}</p>
                </div>
                <div className="col-8 my-3 d-flex align-items-center justify-content-between">
                    <div className="col-3">
                        <BreakfastIcon />
                    </div>
                    <p className="my-0">Breakast included: {meta.breakfast ? 'Yes' : 'No'}</p>
                </div>
                <div className="col-8 my-3 d-flex align-items-center justify-content-between">
                    <div className="col-3">
                        <ParkingIcon />
                    </div>
                    <p className="my-0">Parking included: {meta.parking ? 'Yes' : 'No'}</p>
                </div>
            </div>
        </div>
    )
}

export default VenueLayout;