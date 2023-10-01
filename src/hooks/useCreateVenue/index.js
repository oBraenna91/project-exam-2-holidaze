import { VENUES_URL } from '../../constants';
import { authFetch } from '../auth/authFetch';

export async function createVenue(venueData) {     

  const url = `${VENUES_URL}`;

  try {
      const response = await authFetch(url, {
        method: 'POST',
        body: JSON.stringify(venueData),
      });
      if(!response.ok) {
          throw new Error('Failed to create venue')
      }
      const json = await response.json();
      alert('Venue created!')
      window.location.reload();
      return json;
  } catch(error) {
      console.error('Failed to create venue', error);
      alert('Failed to create venue: ' +error.message); 
    }
}


export default createVenue;