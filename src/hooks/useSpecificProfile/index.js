import { useEffect, useState } from 'react';
import { PROFILE_URL } from '../../constants';
import { authFetch } from '../auth/authFetch';

export function useSpecificProfile(name) {
    ///bookings?_venues=true
  const url = `${PROFILE_URL}${name}?_bookings=true&_venues=true`;
  const [specificProfile, setSpecificProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getSpecificProfile(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await authFetch(url);
        const json = await response.json();

        setSpecificProfile(json);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getSpecificProfile(url);
  }, [url]);

  return { specificProfile, isLoading, isError };
}

export default useSpecificProfile;