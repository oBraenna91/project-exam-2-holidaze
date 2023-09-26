import React from 'react';
import LoginForm from '../../login-form';
import { Link } from 'react-router-dom';


export function LoginPage() {


      return (
          <div>
              <LoginForm />
              <h2 className="mt-5">
                  Not registered yet?
              </h2>
              <p className="">Click <Link to="/register">here</Link> to register</p>
          </div>
        
      );
    }
    
export default LoginPage;