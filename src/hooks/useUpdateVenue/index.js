import { VENUES_URL } from '../../constants';
import { authFetch } from '../auth/authFetch';

export async function updateVenue(venueData, id) {
      
  const url = `${VENUES_URL}/${id}`;


  try {
      const response = await authFetch(url, {
        method: 'PUT',
        body: JSON.stringify(venueData),
      });
      const json = await response.json();

      if(!response.ok) {
        alert(`Update failed: ${json.errors[0].message}`);
      }
      else{
        alert('Updated successfully!')
        window.location.reload();
      }
      return json;
  } catch(error) {
      throw new Error('Failed to update venue'); 
    }
}


export default updateVenue;