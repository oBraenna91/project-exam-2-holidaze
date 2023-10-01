import React from 'react';
import Image from 'react-bootstrap/Image';
import noParkingIcon from '../../../icons/blue_no_parking.png';

function NoParkingIcon() {
    
    return  <Image src={noParkingIcon} fluid alt="Parking-not-included-icon"/>;
    
}
export default NoParkingIcon;