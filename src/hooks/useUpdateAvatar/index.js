import { PROFILE_URL } from '../../constants';
import retrieveName from '../../helpers/retriever';
import { authFetch } from '../auth/authFetch';

export async function updateAvatar(avatarURL) {
    
  const name = retrieveName();  
  const url = `${PROFILE_URL}${name}/media`;
//   const [specificProfile, setSpecificProfile] = useState(null);

  try {
      const response = await authFetch(url, {
        method: 'PUT',
        body: JSON.stringify({avatar: avatarURL}),
      });
      if(!response.ok) {
          throw new Error('Failed to update avatar')
      }
      const json = await response.json();
      return json;
  } catch(error) {
      throw new Error('Failed to update avatar'); 
    }
}


export default updateAvatar;