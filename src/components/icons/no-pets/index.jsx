import React from 'react';
import Image from 'react-bootstrap/Image';
import noPetsIcon from '../../../icons/blue_no-pets.png';

function NoPetsIcon() {
    
    return  <Image src={noPetsIcon} fluid alt="Pets-not-allowed-icon"/>;
    
}
export default NoPetsIcon;