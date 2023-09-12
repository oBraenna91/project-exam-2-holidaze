import { useEffect, useState } from 'react';

function useSearch(venues) {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  function handleSearchValueChange(event) {
    setSearchValue(event.target.value);
  }

  useEffect(() => {
    const filteredVenues = venues.filter((venue) =>
      venue.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchResults(filteredVenues);
  }, [searchValue, venues]);

  return { searchValue, searchResults, handleSearchValueChange };
}

export default useSearch;