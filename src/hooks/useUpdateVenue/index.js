import { VENUES_URL } from '../../constants';
import { authFetch } from '../auth/authFetch';

export async function updateVenue(venueData, id) {
      
  const url = `${VENUES_URL}/${id}`;


  try {
      const response = await authFetch(url, {
        method: 'PUT',
        body: JSON.stringify(venueData),
      });
      if(!response.ok) {
          throw new Error('Failed to update venue')
      }
      const json = await response.json();
      return json;
  } catch(error) {
      throw new Error('Failed to update venue'); 
    }
}


export default updateVenue;