import React, { useState } from 'react';
import loginUser from '../../hooks/auth/login';
import { extractLoginData } from '../../helpers/login';

export function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const loginData = extractLoginData(email, password);
        await loginUser(loginData) 
        
        // Other handling as needed, such as redirecting the user
      } catch (error) {
        console.error('Error logging in:', error);
      }
    };
  
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
  
  export default LoginForm;