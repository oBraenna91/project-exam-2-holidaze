import React, { useState } from 'react';
import { registerUser } from '../../../hooks/auth/register';
import { extractUserData } from '../../../helpers/register';


export function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [venueManager, setVenueManager] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = extractUserData(name, email, password, venueManager);
      console.log(userData);
      await registerUser(userData);
      
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <label>
          Admin:
          <input type="checkbox" checked={venueManager} onChange={(e) => setVenueManager(e.target.checked)} />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;