import React from 'react';
import { VenueCard } from "../../venue-card";
import useApi from '../../../hooks/useApi';
import { VENUES_URL } from '../../../constants';
import SearchBar from '../../search-bar';

export function Home() {

    const {data: venues, isLoading, isError} = useApi(VENUES_URL);

    if(isLoading) {
        return <div className="text-center">
                <p>Loading...</p>
               </div>
    }
    if(isError) {
        return <div className="text-center">
                <p>Error!</p>
               </div>
    }
    return (
        <div className="d-flex flex-column align-items-center my-3">
            <SearchBar venues={venues} />
            <h1 className="mb-5">WELCOME TO HOLIDAZE</h1>
            <div className="row d-flex mx-0 flex-wrap justify-content-center">
                {venues.map((venue) => (
                <div key={venue.id} className="col-md-5 col-lg-3 col-9 mx-2 mb-4">
                    <VenueCard venue={venue} />
                </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
