import React from 'react';
import { useParams } from 'react-router-dom';
import useSpecificIdApi from '../../../hooks/useSpecificIdApi';
import VenueDetails from '../../venue-details';

export function SpecificVenue() {

    const { id } = useParams();
    const { specificVenue, isLoading, isError } = useSpecificIdApi(id);
    
    if (isLoading || !specificVenue) {
        return <div className="text-secondary text-center">Loading...</div>;
      }
    
      if (isError) {
        return <div className="text-secondary text-center">Error</div>;
      }

      return (
        <VenueDetails venue={specificVenue} />
      );
    }
    
    export default SpecificVenue;