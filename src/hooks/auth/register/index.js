import { REGISTER_URL } from "../../../constants";

export const registerUser = async (userData) => {
  const body = JSON.stringify(userData);

  try {
    const response = await fetch(REGISTER_URL, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body,
    });

    const result = await response.json();
    console.log(result);
    if (response.ok) {
      alert('Profile registered');
    } else {
      console.error('Registration failed:', result); // Log the error response
    }
  } catch (error) {
    console.error('Error registering user:', error);
  }
};