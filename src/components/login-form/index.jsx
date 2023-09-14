import React, { useState } from 'react';
import loginUser from '../../hooks/auth/login';
import { extractLoginData } from '../../helpers/login';
import CustomButton from '../button';

export function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const loginData = extractLoginData(email, password);
        await loginUser(loginData) 
        window.location.href='/profile';
      } catch (error) {
        console.error('Error logging in:', error);
      }
    };
  
    return (
      <div>
        <h2 className="mt-5">Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <input 
            className="mt-3 form-input"
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="E-mail"/>
          </label>
          <br />
          <label>
            <input 
            className="my-3 form-input"
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password"
            />
          </label>
          <br />
          <CustomButton 
          label="Log in"
          onClick={handleSubmit}
          />
        </form>
      </div>
    );
  }
  
  export default LoginForm;