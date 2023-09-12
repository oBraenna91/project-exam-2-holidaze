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

    const handleNumGuestsChange = (e) => {
        setNumGuests(parseInt(e.target.value));
      };

    const maxGuests = venue.maxGuests ;

    const dropdownOptions = Array.from({length: maxGuests}, (_, index) => index + 1);

    const handleBookingRequest = async () => {
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
                body: JSON.stringify(bookingRequest)
            });
            const result = await response.json();
            console.log(result);
            if(response.ok){
                alert('Booking created!')
            }
        }catch(error){
            console.log('Error', error);
        }
    };

    return(
        <div>
            <VenueLayout venue={venue} />
            <MyCalendar venue={venue} onDatesSelected={handleDatesSelected} />
            <div className="d-flex flex-column my-5">
                <label>
                    Number of guests:
                    <select id="guestSelector" value={numGuests} onChange={handleNumGuestsChange}>
                        {dropdownOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <TotalAmountCalculator selectedBookingDates={selectedBookingDates} venuePrice={venue.price} />
            <CustomButton onClick={handleBookingRequest} label="Book" />
        </div>
        
    )
}

export default VenueDetails;