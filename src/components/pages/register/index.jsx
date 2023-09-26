import React, { useState } from 'react';
import { registerUser } from '../../../hooks/auth/register';
import { extractUserData } from '../../../helpers/register';
import CustomButton from '../../button';


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
      //console.error(error);
      console.log(error)
    }
  };

  return (
    <div>
      <h2 className="mt-5">Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input className="my-3 form-input" placeholder="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          <input className="my-3 form-input" placeholder="E-Mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          <input className="my-3 form-input" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <label>
          Admin:
          <input className="form-input" type="checkbox" checked={venueManager} onChange={(e) => setVenueManager(e.target.checked)} />
        </label>
        <br />
        <CustomButton 
          label="Register"
          onClick={handleSubmit}
          className="my-4"
          />
      </form>
    </div>
  );
}

export default RegistrationForm;