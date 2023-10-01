import React from 'react';
import Image from 'react-bootstrap/Image';
import noWifiIcon from '../../../icons/blue_no-wifi.png';

function NoWifiIcon() {
    
    return  <Image src={noWifiIcon} fluid alt="Wifi-not-available-icon"/>;
    
}
export default NoWifiIcon;