// import SearchBar from "../../search-bar";
import React from 'react';
import { VenueCard } from "../../card";
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
            <SearchBar venues={venues}/>
            <h1 className="mb-5">WELCOME TO HOLIDAZE</h1>
            {venues.map((venue) => (
                <VenueCard key={venue.id} venue={venue} />
            ))}
            
        </div>
    );
}

export default Home;
