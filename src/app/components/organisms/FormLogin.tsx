'use client';
import InputField from '@/app/components/molecules/InputField';
import PasswordInputField from '@/app/components/molecules/PasswordInputField';
import { Form, Formik } from 'formik';
import Button from '@/app/components/atoms/Button';
import { isEmail } from '@/lib/regex';
import { loginService } from '@/services/login-service';
import { useRouter } from 'next/navigation';
import useAuthStore from '@/store/useAuthStore';
import { getProfileService } from '@/services/get-profile-service';
import WithAuth from '@/app/components/hoc/WithAuth';

export default WithAuth(FormLogin, 'without');
function FormLogin() {
  const login = useAuthStore.useLogin();
  return (
    <Formik
      initialValues={{
        email_or_username: '',
        password: '',
      }}
      onSubmit={async (values) => {
        const res = await loginService(
          values.email_or_username,
          values.password
        );
        if (res.data.isSuccess) {
          const profile = await getProfileService();
          if (profile.data.data.email) {
            login({ ...profile.data.data });
          }
        }
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
