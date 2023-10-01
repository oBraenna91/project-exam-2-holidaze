import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactFormValidation } from '../../../helpers/contact-form-validation';
import CustomButton from '../../button';


export function ContactPage() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(contactFormValidation),
      });

        function onSubmit(data) {
        console.log(data);
    }


      return (
          <div>
              <h1 className="my-3">Contact us</h1>
              
              <div className="d-flex flex-column justify-content-center align-items-center">
        <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-input text-primary px-3 py-1"
            placeholder="Full Name"
            {...register('fullName')}
          />
          <p>{errors.fullName?.message}</p>
          <input
            className="form-input text-primary px-3 py-1"
            placeholder="E-mail"
            {...register('email')}
          />
          <p>{errors.email?.message}</p>
          <input
            className="form-input text-primary px-3 py-1"
            placeholder="Subject"
            {...register('subject')}
          />
          <p>{errors.subject?.message}</p>
          <input
            className="form-input text-primary px-3 py-1"
            placeholder="Age"
            {...register('age')}
          />
          <p>{errors.age?.message}</p>
          <textarea
            rows="5"
            className="form-input text-primary rounded-4 border border-2 px-3 py-1"
            placeholder="Your message"
            {...register('body')}
          />
          <p>{errors.body?.message}</p>
          <CustomButton 
            className="mt-3 p-0 col-7 m-auto text-primary" 
            label="Send" 
            onClick={handleSubmit(onSubmit)}
            />
        </form>
      </div>
      <div style={{ height: '30vh' }}></div>
          </div>
        
      );
    }
    
export default ContactPage;