import React from 'react';
import useSpecificProfile from '../../../hooks/useSpecificProfile';
import CreateVenueModal from '../../createVenueModal';
import retrieveName from '../../../helpers/retriever';
import AdminCard from '../../admin-card';


export function AdminPage() {

    const name = retrieveName();
    const { specificProfile, isLoading, isError } = useSpecificProfile(name);

    if (isLoading || !specificProfile) {
        return <div className="text-secondary text-center">Loading...</div>;
      }
    
      if (isError) {
        return <div className="text-secondary text-center">Error</div>;
      }
      const yourAdminVenues = specificProfile.venues;

      return (
          <div>
              <h1 className="my-3">Admin</h1>
              <CreateVenueModal />
              <h2 className="my-3">Your Venues</h2>
              {yourAdminVenues.map((venue) => (
                <AdminCard venue={venue} key={venue.id}/>
              ))}
          </div>
      );
    }
    
export default AdminPage;

// export function AdminLayout({ profile }) {

//         const name = retrieveName();
//         const { specificProfile, isLoading, isError } = useSpecificProfile(name);
    
//         if (isLoading || !specificProfile) {
//             return <div className="text-secondary text-center">Loading...</div>;
//           }
        
//           if (isError) {
//             return <div className="text-secondary text-center">Error</div>;
//           }
//           return (
//         <div>
//             <h1>Admin</h1>
//             <TestCreateVenueModal />
//             <AdminLayout profile={specificProfile} />
