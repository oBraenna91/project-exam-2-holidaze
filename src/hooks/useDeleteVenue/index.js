import { VENUES_URL } from '../../constants';
import { authFetch } from '../auth/authFetch';

export async function removeVenue(id) {
      
  const url = `${VENUES_URL}/${id}`;


  try {
      const response = await authFetch(url, {
        method: 'DELETE',
      });
      if(!response.ok) {
          throw new Error('Failed to delete venue')
      }
  } catch(error) {
      throw new Error('Failed to remove venue'); 
    }
}


export default removeVenue;