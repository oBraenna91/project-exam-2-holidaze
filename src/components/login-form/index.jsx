import React from 'react';
import loginUser from '../../hooks/auth/login';
import CustomButton from '../button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormValidation } from '../../helpers/login-form-validation';



export function LoginForm() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(loginFormValidation),
      });

        function onSubmit(data) {
        loginUser(data);
    }


      return (
          <div>
              <h1 className="my-3">Login</h1>
              
              <div className="d-flex flex-column justify-content-center align-items-center">
                <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                  <input
                    className="form-input text-primary px-3 py-1"
                    placeholder="E-mail"
                    {...register('email')}
                  />
                  <p>{errors.email?.message}</p>
                  <input
                    className="form-input text-primary px-3 py-1"
                    placeholder="Password"
                    type="password"
                    {...register('password')}
                  />
                  
                  <p>{errors.password?.message}</p>
                  <CustomButton 
                    className="mt-3 p-0 col-7 m-auto text-primary" 
                    label="Log in" 
                    onClick={handleSubmit(onSubmit)}
                    />
                </form>
              </div>
          </div>
        
      );
    }
    
export default LoginForm;