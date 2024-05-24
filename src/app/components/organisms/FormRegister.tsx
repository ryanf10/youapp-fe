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
import { registerService } from '@/services/register-service';
import { toast } from 'react-hot-toast';

export default WithAuth(FormRegister, 'without');
function FormRegister() {
  const router = useRouter();
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          username: '',
          password: '',
          confirm_password: '',
        }}
        onSubmit={async (values) => {
          if (values.password != values.confirm_password) {
            toast.error("Confirm password doesn't match");
            return;
          }
          const res = await registerService(
            values.email,
            values.username,
            values.password
          );
          if (res.data.isSuccess) {
            router.push('/');
          }
        }}
      >
        {({ values, errors, touched, validateField }) => (
          <Form>
            <InputField
              className='mt-5 h-[51px] w-full p-[18px]'
              name='email'
              placeholder='Create Email'
              label={null}
              type='email'
            />
            <InputField
              className='mt-5 h-[51px] w-full p-[18px]'
              name='username'
              placeholder='Create Username'
              label={null}
              type='text'
            />
            <PasswordInputField
              containerClassName='mt-5'
              name='password'
              placeholder='Create Password'
              className='h-[51px] w-full p-[18px]'
              label={null}
            />
            <PasswordInputField
              containerClassName='mt-5'
              name='confirm_password'
              placeholder='Confirm Password'
              className='h-[51px] w-full p-[18px]'
              label={null}
            />
            <Button
              type='submit'
              variant='gradient'
              className='mt-5 h-[51px]'
              disabled={
                values.email == '' ||
                values.username == '' ||
                values.password == '' ||
                values.confirm_password == ''
              }
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
      <div className='mt-8 text-center'>
        <Text as='span' className='text-[13px] font-[500]'>
          Have an account?
        </Text>{' '}
        <Link href='/login'>
          <Text
            as='span'
            className='text-[13px] font-[500] text-[#F3EDA6]  underline'
          >
            Login here
          </Text>
        </Link>
      </div>
    </>
  );
}
