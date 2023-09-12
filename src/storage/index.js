export const setLocalStorageItem = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error setting local storage item:', error);
    }
  };
  
  export const getLocalStorageItem = (key) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error getting local storage item:', error);
      return null;
    }
  };
  
  export const removeLocalStorageItem = (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing local storage item:', error);
    }
  };