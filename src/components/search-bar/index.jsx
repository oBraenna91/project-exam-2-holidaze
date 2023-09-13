import React from 'react';
import Form from 'react-bootstrap/Form';
import useSearch from '../../hooks/useSearch';
import MiniCard from '../mini-card';

export function SearchBar(props) {
   const { searchValue, searchResults, handleSearchValueChange } = useSearch(props.venues);

  return (
    <div className="search-container">
        <Form className="d-flex flex-column">
            <input 
            className="search-bar m-auto rounded-pill mb-5 input-button px-4 py-1 col-12"
            value={searchValue}
            placeholder="Search.."
            onChange={handleSearchValueChange}
            />
        {/* <div class="col-1">
                <SearchIcon />
            </div> */}
        </Form>
        {searchValue && (
            <div className="mt-1 mb-5 p-5 shadow-lg rounded-5">
                <h3 className="text-primary underline-text">Search results:</h3>
                {searchResults.map((venue) => (
                    <MiniCard venue={venue} key={venue.id}/>
                ))}
            </div>
        )}
    </div>
  );
}

export default SearchBar;