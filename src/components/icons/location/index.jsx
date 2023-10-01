import React from 'react';
import Image from 'react-bootstrap/Image';
import locationIcon from '../../../icons/blue_location.png';

export function BlueLocationIcon() {

    const imageStyle = {
        maxWidth: '20px',
        maxHeight: '20px',
        width: 'auto',
        height: 'auto',
    };
    
    return  <Image src={locationIcon} style={imageStyle} alt="location-icon"/>; //fluid />;
    
}
export default BlueLocationIcon;