import { VENUES_URL } from '../../constants';
import { authFetch } from '../auth/authFetch';

export async function createVenue(venueData) {     

  const url = `${VENUES_URL}`;

  try {
      const response = await authFetch(url, {
        method: 'POST',
        body: JSON.stringify(venueData),
      });
      
      const json = await response.json();

      if(!response.ok) {
        alert(`Creation failed: ${json.errors[0].message}`);
      }
      else{
        alert('Venue created!')
        window.location.reload();
      }
      return json;
  } catch(error) {
      console.error('Failed to create venue', error);
      alert('Failed to create venue: ' +error.message); 
    }
}


export default createVenue;