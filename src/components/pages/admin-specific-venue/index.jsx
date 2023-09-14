import React from 'react';
import { useParams } from 'react-router-dom';
import useSpecificIdApi from '../../../hooks/useSpecificIdApi';
import AdminBookingCard from '../../admin-booking-card';
import AdminVenueDetails from '../../admin-venue-details';
import AdminCalendar from '../../admin-calendar';
import removeVenue from '../../../hooks/useDeleteVenue';
import CustomButton from '../../button';
import CustomModal from '../../modal';
import ConfirmationModal from '../../confirmation-modal';

export function AdminSpecificVenue() {

    const { id } = useParams();
    const { specificVenue, isLoading, isError } = useSpecificIdApi(id);

    const handleDeleteVenue = async () => {
        try {
          // Call the removeVenue function with the venue id
          await removeVenue(id);
          alert('Venue deleted')
          window.location.href= '/admin';
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
              <ConfirmationModal 
              buttonTitle="Delete venue"
              buttonClass="bg-danger"
              title="Delete this venue" 
              body="Are you sure you want to delete this venue?" 
              onClick={handleDeleteVenue} 
              confirmation="Yes, delete venue"
              />
            </div>
          </div>
          
      );
    }
    
    export default AdminSpecificVenue;