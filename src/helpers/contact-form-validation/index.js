import * as yup from 'yup';

export const contactFormValidation = yup.object({
  fullName: yup
    .string()
    .min(3, 'minimum 3 characters')
    .max(70, 'too many characters')
    .required('Required field'),

  subject: yup
    .string()
    .min(3, 'minimum 3 characters')
    .max(70, 'too many characters')
    .required('Required field'),

  email: yup
    .string()
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Please enter a valid e-mail address')
    .required('Please enter your e-mail address'),

  body: yup
    .string()
    .min(3, 'minimum 3 characters')
    .max(500, 'too many characters')
    .required('Required field'),

  age: yup.number().positive().integer().typeError('Please enter your age'),
});