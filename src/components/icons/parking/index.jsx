import React from 'react';
import Image from 'react-bootstrap/Image';
import parkingIcon from '../../../icons/blue_parking.png';

function ParkingIcon() {
    
    return  <Image src={parkingIcon} fluid alt="Parking-included-icon"/>;
    
}
export default ParkingIcon;