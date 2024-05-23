'use client';
import InputField from '@/app/components/molecules/InputField';
import PasswordInputField from '@/app/components/molecules/PasswordInputField';
import { Form, Formik } from 'formik';
import Button from '@/app/components/atoms/Button';
import axios, { localAxios } from '@/lib/axios';
import { isEmail } from '@/lib/regex';

export default function FormLogin() {
  return (
    <Formik
      initialValues={{
        email_or_username: '',
        password: '',
      }}
      onSubmit={(values) => {
        localAxios.post('/api/login', {
          email: isEmail(values.email_or_username)
            ? values.email_or_username
            : '',
          username: isEmail(values.email_or_username)
            ? ''
            : values.email_or_username,
          password: values.password,
        });
      }}
    >
      {({ values, errors, touched, validateField }) => (
        <Form>
          <InputField
            className='mt-5 h-[51px] w-full p-[18px]'
            name='email_or_username'
            label={null}
          />
          <PasswordInputField
            containerClassName='mt-5'
            name='password'
            className='h-[51px] w-full p-[18px]'
            label={null}
          />
          <Button
            type='submit'
            variant='gradient'
            className='mt-5 h-[51px]'
            disabled={values.email_or_username == '' || values.password == ''}
          >
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
}
