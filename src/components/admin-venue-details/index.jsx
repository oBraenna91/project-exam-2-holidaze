import React, {useState} from 'react';
import logoImage from '../../logo/dark_logo.png';
import Image from 'react-bootstrap/Image';
import WifiIcon from '../icons/wifi';
import PetsIcon from '../icons/pets';
import BreakfastIcon from '../icons/breakfast';
import ParkingIcon from '../icons/parking';
import updateVenue from '../../hooks/useUpdateVenue';
import CustomModal from '../modal';
import UpdateVenueForm from '../update-venue-form';


export function AdminVenueDetails({ venue }) {

    const {name, media, location, description, rating, price, meta, maxGuests, id} = venue;
    const mediaUrl = media.length > 0 ? media[0] : logoImage;
    const [isUpdating, setIsUpdating] = useState(false);
    

    const onSubmit = async (data) => {
        setIsUpdating(true);
        const venueUpdatedData = {
            ...data,
            price: parseFloat(data.price),
            maxGuests: parseInt(data.maxGuests)
        };

        try {
            await updateVenue(venueUpdatedData, id);
            setIsUpdating(false);
            alert('Venue updated successfully')
            window.location.reload();
        } catch(error){
            console.log('Failed', error);
            setIsUpdating(false);
        }
    };

    return(
        <div>
            <Image src={mediaUrl} alt={name} fluid />
            <h2 className="my-3">{name.toUpperCase()}</h2>
            <p className="col-11 mb-5 m-auto">{description}</p>
            <p>{location.address}, {location.city}</p>
            <p>{location.country}</p>
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
            <p>Rating:{rating}</p>
            <p>Price: {price} $</p>
            <p>Max number of guests: {maxGuests}</p>
            <div className="my-3">
              <CustomModal
                title="Update This Venue"
                buttonTitle="Update venue"
                body={<UpdateVenueForm initialValues={venue} onSubmit={onSubmit} />}
              />
            </div>
        </div>
        
    );
}

export default AdminVenueDetails;