import React from 'react';
import { useParams } from 'react-router-dom';
import useSpecificIdApi from '../../../hooks/useSpecificIdApi';
import AdminBookingCard from '../../admin-booking-card';
import AdminVenueDetails from '../../admin-venue-details';
import AdminCalendar from '../../admin-calendar';
import removeVenue from '../../../hooks/useDeleteVenue';
import CustomButton from '../../button';

export function AdminSpecificVenue() {

    const { id } = useParams();
    const { specificVenue, isLoading, isError } = useSpecificIdApi(id);

    const handleDeleteVenue = async () => {
        try {
          // Call the removeVenue function with the venue id
          await removeVenue(id);
          // Redirect or handle success as needed
        } catch (error) {
          console.error('Failed to delete venue:', error);
          // Handle error
        }
      };
     

    if (isLoading || !specificVenue) {
        return <div className="text-secondary text-center">Loading...</div>;
      }
    
      if (isError) {
        return <div className="text-secondary text-center">Error</div>;
      }
      const bookings = specificVenue.bookings;

      return (
          <div>
            <h1 className="my-3">Administrate your venue</h1>
            <AdminVenueDetails venue={specificVenue} />
            <h2 className="my-3">Bookings for this venue</h2>
            <div className="d-flex my-3 overflow-auto">
                {bookings.map ((booking) => (
                    <AdminBookingCard booking={booking} key={booking.id}/>
                ))}
            </div>
            <AdminCalendar bookings={bookings}/>
            <div>
                <CustomButton label="Delete venue" className="bg-danger" onClick={handleDeleteVenue} />
            </div>
          </div>
          
      );
    }
    
    export default AdminSpecificVenue;