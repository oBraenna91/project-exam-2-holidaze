import React, {useState} from 'react';
import CustomButton from '../button';
import MyCalendar from '../calendar';
import { authFetch } from '../../hooks/auth/authFetch';
import { BOOKINGS_URL } from '../../constants';
import VenueLayout from '../venue-layout';
import TotalAmountCalculator from '../amount-calculator';

export function VenueDetails({ venue }) {

    const [selectedBookingDates, setSelectedBookingDates] = useState([]);
    const [numGuests, setNumGuests] = useState(1);

    const handleDatesSelected = (dates) => {
        setSelectedBookingDates(dates);
    };

    const isLoggedIn = !!localStorage.getItem('token') || false;

    const maxGuests = venue.maxGuests ;

    const dropdownOptions = Array.from({length: maxGuests}, (_, index) => index + 1);

    const handleNumGuestsChange = (e) => {
        setNumGuests(parseInt(e.target.value));
      };

      const handleBookingRequest = async () => {
        if (!isLoggedIn) {
            alert('You are not logged in');
            window.location.href = '/login';
            return;
        }

        if (selectedBookingDates.length !== 2) {
            alert('Please select check-in and check-out dates');
            return;
          }

        const [startDate, endDate] = selectedBookingDates;
    
        const bookingRequest = {
            dateFrom: startDate.toISOString(),
            dateTo: endDate.toISOString(),
            guests: numGuests,
            venueId: venue.id,
        };
    
        try {
            console.log(bookingRequest);
            const response = await authFetch(BOOKINGS_URL, {
                method: 'POST',
                body: JSON.stringify(bookingRequest),
            });
            const result = await response.json();
            if (response.ok) {
                alert('Booking created!');
                window.location.reload();
            }
            return result;
        } catch (error) {
            console.log('Error', error);
        }
    };

    return(
        <div className="col-lg-6 col-xl-5 m-auto">
            <VenueLayout venue={venue} />
            <MyCalendar venue={venue} onDatesSelected={handleDatesSelected} />
            <div className="d-flex flex-column my-5">
                <label className="d-flex flex-column justify-content-center align-items-center">
                    Number of guests:
                    <select className="mt-2 guests-selector" id="guestSelector" value={numGuests} onChange={handleNumGuestsChange}>
                        {dropdownOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <TotalAmountCalculator selectedBookingDates={selectedBookingDates} venuePrice={venue.price} />
            <CustomButton className="text-primary" onClick={handleBookingRequest} label="Book" />
        </div>
        
    )
}

export default VenueDetails;