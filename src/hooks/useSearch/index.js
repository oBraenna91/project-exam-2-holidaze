import { useEffect, useState } from 'react';

function useSearch(venues) {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  function handleSearchValueChange(event) {
    setSearchValue(event.target.value);
  }

  useEffect(() => {
    const filteredVenues = venues.filter((venue) => {
      const lowerSearchValue = searchValue.toLowerCase();
      const lowerVenueName = venue.name.toLowerCase();
      const location = venue.location;

      // Check if the search value is included in the lowercase venue name
      // or if it's included in the lowercase city or country of the location
      return (
        lowerVenueName.includes(lowerSearchValue) ||
        (location.city.toLowerCase().includes(lowerSearchValue) ||
          location.country.toLowerCase().includes(lowerSearchValue))
      );
    });

    setSearchResults(filteredVenues);
  }, [searchValue, venues]);

  return { searchValue, searchResults, handleSearchValueChange };
}

export default useSearch;