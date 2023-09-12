import { LOGIN_URL } from "../../../constants";
import { setLocalStorageItem } from "../../../storage";

export const loginUser = async (userData) => {
  const body = JSON.stringify(userData);

  try {
    const response = await fetch(LOGIN_URL, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body,
    });

    const result = await response.json();
    
    if(result.accessToken) {
        const {accessToken, ...user} = result;
        setLocalStorageItem('token', result.accessToken);
        setLocalStorageItem('user', result);
        alert('Successfully logged in!')

    } else {
      console.error('Registration failed:', result); // Log the error response
    }
  } catch (error) {
    console.error('Error registering user:', error);
  }
};

export default loginUser;