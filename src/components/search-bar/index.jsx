import React from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import useSearch from '../../hooks/useSearch';

export function SearchBar(props) {
   const { searchValue, searchResults, handleSearchValueChange } = useSearch(props.venues);

  return (
    <div>
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
                <h3 className="text-primary">Search results:</h3>
                {searchResults.map((venue) => (
                    <div className="my-1" key={venue.id}>
                        <Link to={`venue/${venue.id}`} className="text-primary">
                            {venue.name.toUpperCase()}
                        </Link>
                    </div>
                ))}
            </div>
        )}
    </div>
  );
}

export default SearchBar;