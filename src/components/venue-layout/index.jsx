import React from 'react';
import Image from 'react-bootstrap/Image';
import logoImage from '../../logo/dark_logo.png'
import BreakfastIcon from '../icons/breakfast';
import ParkingIcon from '../icons/parking';
import PetsIcon from '../icons/pets';
import WifiIcon from '../icons/wifi';
import NoWifiIcon from '../icons/no-wifi';
import NoPetsIcon from '../icons/no-pets';
import NoParkingIcon from '../icons/no-parking';
import NoBreakfastIcon from '../icons/no-breakfast';

export function VenueLayout({ venue }) {
    const {name, media, location, description, rating, price, meta, maxGuests} = venue;
    const mediaUrl = media.length > 0 ? media[0] : logoImage;
    return (
        <div>
            <h1 className="my-5">{name}</h1>
            <div className="col-12 col-md-8 col-lg-10 m-auto">
                <Image src={mediaUrl} alt={name} fluid />
            </div>
            <h2 className="mt-5">Location:</h2>
            <p className="venue-p">{location.address}</p>
            <p className="venue-p">{location.city} , {location.country}</p>
            <p className="venue-p my-5 mx-3">{description}</p>
            <h3 className="">Rating: {rating}</h3>
            <h3 className="">Price: {price} $</h3>
            <h3 className="">Guests: max {maxGuests}</h3>
            <div className="d-flex my-5 flex-column justify-content-center align-items-center">
                <div className="col-8 col-md-3 my-3 d-flex align-items-center justify-content-between">
                    <div className="col-3">
                        {meta.wifi ? <WifiIcon /> : <NoWifiIcon />}
                    </div>
                    <p className="my-0">WiFi included: {meta.wifi ? 'Yes' : 'No'}</p>
                </div>
                <div className="col-8 col-md-3 my-3 d-flex align-items-center justify-content-between">
                    <div className="col-3">
                        {meta.pets ? <PetsIcon /> : <NoPetsIcon />}
                    </div>
                    <p className="my-0">Pets allowed: {meta.pets ? 'Yes' : 'No'}</p>
                </div>
                <div className="col-8 col-md-3 my-3 d-flex align-items-center justify-content-between">
                    <div className="col-3">
                        {meta.breakfast ? <BreakfastIcon /> : <NoBreakfastIcon />}
                    </div>
                    <p className="my-0">Breakast included: {meta.breakfast ? 'Yes' : 'No'}</p>
                </div>
                <div className="col-8 col-md-3 my-3 d-flex align-items-center justify-content-between">
                    <div className="col-3">
                        {meta.parking ? <ParkingIcon /> : <NoParkingIcon />}
                    </div>
                    <p className="my-0">Parking included: {meta.parking ? 'Yes' : 'No'}</p>
                </div>
            </div>
        </div>
    )
}

export default VenueLayout;