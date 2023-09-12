export const extractUserData = (name, email, password, venueManager) => {
    return {
      name,
      email,
      password,
      venueManager,
    };
  };

export const extractLoginData = (email, password) => {
    return {
      email,
      password,
    };
  };