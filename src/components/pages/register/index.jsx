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

      if (!email.endsWith('@stud.noroff.no')) {
        alert('Email must end with "@stud.noroff.no"');
        return;
      }

      const userData = extractUserData(name, email, password, venueManager);
      await registerUser(userData);
      
    } catch (error) {
      console.error(error);
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
        <label className="d-flex flex-column justify-content-center align-items-center">
          Venue Manager:
          <input className="form-input checkbox" type="checkbox" checked={venueManager} onChange={(e) => setVenueManager(e.target.checked)} />
        </label>
        <br />
        <CustomButton 
          label="Register"
          onClick={handleSubmit}
          className="my-4 text-primary"
          />
      </form>
      <div style={{ height: '20vh' }}></div>
    </div>
  );
}

export default RegistrationForm;