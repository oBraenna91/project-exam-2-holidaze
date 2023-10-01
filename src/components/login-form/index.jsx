import React from 'react';
import loginUser from '../../hooks/auth/login';
import CustomButton from '../button';

// export function LoginForm() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
  
//       try {
//         const loginData = extractLoginData(email, password);
//         await loginUser(loginData) 
//       } catch (error) {
//         console.error('Error logging in:', error);
//       }
//     };
  
//     return (
//       <div>
//         <h2 className="mt-5">Login</h2>
//         <form onSubmit={handleSubmit}>
//           <label>
//             <input 
//             className="my-3 form-input"
//             type="email" 
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)} 
//             placeholder="E-mail"
//             />
//           </label>
//           <br />
//           <label>
//             <input 
//             className="my-3 form-input"
//             type="password" 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)} 
//             placeholder="Password"
//             />
//           </label>
//           <br />
//           <CustomButton 
//           label="Log in"
//           className="text-primary"
//           onClick={handleSubmit}
//           />
//         </form>
//       </div>
//     );
//   }
  
//   export default LoginForm;

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
      <div style={{ height: '30vh' }}></div>
          </div>
        
      );
    }
    
export default LoginForm;