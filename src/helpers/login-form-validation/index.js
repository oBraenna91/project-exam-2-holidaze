import * as yup from 'yup';

export const loginFormValidation = yup.object({
  password: yup
    .string()
    .min(3, 'minimum 3 characters')
    .max(70, 'too many characters')
    .required('Please enter your password'),

  email: yup
    .string()
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Please enter a valid e-mail address')
    .required('Please enter your e-mail address'),

});