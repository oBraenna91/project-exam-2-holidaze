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
        setLocalStorageItem('token', accessToken);
        setLocalStorageItem('user', user);
        alert('Successfully logged in!')
    } else {
      console.error('Login failed:', result);
    }
  } catch (error) {
    console.error('Error loggin in user:', error);
  }
};

export default loginUser;