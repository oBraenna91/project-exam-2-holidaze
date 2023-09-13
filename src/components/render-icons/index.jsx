import React from 'react';
import WifiIcon from '../../components/icons/wifi';
import NoWifiIcon from '../../components/icons/no-wifi';
import PetsIcon from '../../components/icons/pets';
import NoPetsIcon from '../../components/icons/no-pets';
import ParkingIcon from '../../components/icons/parking';
import NoParkingIcon from '../../components/icons/no-parking';
import BreakfastIcon from '../../components/icons/breakfast';
import NoBreakfastIcon from '../../components/icons/no-breakfast';


export function RenderIcons({ meta }) {
    const icons = [];

    if (meta.wifi) {
        icons.push(<WifiIcon key="wifi" />);
    } else {
        icons.push(<NoWifiIcon key="no-wifi" />)
    }

    if (meta.parking) {
        icons.push(<ParkingIcon key="parking" />);
      } else {
        icons.push(<NoParkingIcon key="no-parking" />);
      }
    
      if (meta.pets) {
        icons.push(<PetsIcon key="pets" />);
      } else {
        icons.push(<NoPetsIcon key="no-pets" />);
      }
    
      if (meta.breakfast) {
        icons.push(<BreakfastIcon key="breakfast" />);
      } else {
        icons.push(<NoBreakfastIcon key="no-breakfast" />);
      }
    
      return (
        <div className="icons-container mt-3 d-flex justify-content-between">
            {icons.map((icon, index) => (
                <div key={index} className="icon-div col-2">
                    {icon}
                </div>
            ))}
        </div>
    );
};
export default RenderIcons;