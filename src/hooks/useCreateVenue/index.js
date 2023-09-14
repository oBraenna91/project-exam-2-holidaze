import { VENUES_URL } from '../../constants';
//import retrieveName from '../../helpers/retriever';
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
      console.log(json);
      alert('Venue created!')
      return json;
  } catch(error) {
      throw new Error('Failed to create venue'); 
    }
}


export default createVenue;