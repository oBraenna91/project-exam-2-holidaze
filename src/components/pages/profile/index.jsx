import React from 'react';
import useSpecificProfile from '../../../hooks/useSpecificProfile';
import retrieveName from '../../../helpers/retriever';
import ProfileLayout from '../profileLayout';


export function ProfilePage() {

    const name = retrieveName();
    const { specificProfile, isLoading, isError } = useSpecificProfile(name);
    
    console.log(specificProfile);

    if (isLoading || !specificProfile) {
        return <div className="text-secondary text-center">Loading...</div>;
      }
    
      if (isError) {
        return <div className="text-secondary text-center">Error</div>;
      }

      return (
        <ProfileLayout profile={specificProfile} />
      );
    }
    
export default ProfilePage;