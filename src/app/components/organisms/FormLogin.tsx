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
import Text from '@/app/components/atoms/Text';
import Link from 'next/link';

export default WithAuth(FormLogin, 'without');
function FormLogin() {
  const login = useAuthStore.useLogin();
  return (
    <>
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
              placeholder='Enter Username/Email'
              label={null}
            />
            <PasswordInputField
              containerClassName='mt-5'
              name='password'
              placeholder='Enter Password'
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
      <div className='mt-8 text-center'>
        <Text as='span' className='text-[13px] font-[500]'>
          No account?
        </Text>{' '}
        <Link href='/register'>
          <Text
            as='span'
            className='text-[13px] font-[500] text-[#F3EDA6]  underline'
          >
            Register here
          </Text>
        </Link>
      </div>
    </>
  );
}
