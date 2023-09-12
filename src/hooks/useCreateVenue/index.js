import { VENUES_URL } from '../../constants';
//import retrieveName from '../../helpers/retriever';
import { authFetch } from '../auth/authFetch';

export async function createVenue(venueData) {
    
//   const name = retrieveName();  
  const url = `${VENUES_URL}`;
//   const [specificProfile, setSpecificProfile] = useState(null);

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
      return json;
  } catch(error) {
      throw new Error('Failed to update avatar'); 
    }
}


export default createVenue;