import React from 'react';
import Image from 'react-bootstrap/Image';
import alternativeAvatar from '../../../icons/blue_man.png';
import AvatarModal from '../../avatar-modal';
import BookingCard from '../../user-bookings';

export function ProfileLayout({ profile }) {
    const {name, avatar, venueManager, bookings} = profile;
    const avatarUrl = avatar ? avatar : alternativeAvatar;

    const currentDate = new Date(); // Get the current date
        const upcomingBookings = bookings
        .filter((booking) => {
            const bookingDate = new Date(booking.dateFrom); 
            return bookingDate >= currentDate;
        })
        .sort((bookingA, bookingB) => {
            const dateA = new Date(bookingA.dateFrom);
            const dateB = new Date(bookingB.dateFrom);
            return dateA - dateB; // Sort in ascending order (earliest first)
        });

    // const previousBookings = bookings.filter((booking) => {
    //     const bookingDate = new Date(booking.dateTo); 
    //     return bookingDate < currentDate;
    //     });
    return (
        <div>
            <h1 className="my-5">Profile</h1>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="col-4 mb-3">
                    <Image src={avatarUrl} alt={name} fluid />
                </div>
                <div className="mb-3">
                    <h2>{name}</h2>
                    {venueManager && <h2>Venue Manager</h2>}
                </div>
            </div>
            <div>
                {<AvatarModal />}
            </div>
            <div>
                <h2 className="my-5">Your upcoming bookings</h2>
                {upcomingBookings.map((booking) => (
                    <BookingCard key={booking.id} booking={booking} />
                ))}
            </div>
        </div>
    )
}

export default ProfileLayout;