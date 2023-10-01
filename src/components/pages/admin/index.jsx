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
              <div className="row d-flex mx-0 flex-wrap justify-content-center">
                {yourAdminVenues.map((venue) => (
                  <div key={venue.id} className="col-md-5 col-lg-3 col-9 mx-2 mb-4">
                    <AdminCard venue={venue} />
                  </div>
                ))}
              </div>
              <div style={{ height: '80vh' }}></div>
          </div>
      );
    }
    
export default AdminPage;
