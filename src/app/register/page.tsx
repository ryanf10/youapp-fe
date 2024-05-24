import FormRegister from '@/app/components/organisms/FormRegister';
import Text from '@/app/components/atoms/Text';
import BackLink from '@/app/components/molecules/BackLink';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register | YouApp Test',
  description: "Let's explore the world",
};

export default function RegisterPage() {
  return (
    <>
      <main className='bg-custom-gradient min-h-screen w-full p-4'>
        <div className='mx-auto w-full max-w-md'>
          <BackLink href='/' />

          <Text as='h1' variant='title' className='ml-2 mt-16'>
            Register
          </Text>

          <FormRegister />
        </div>
      </main>
    </>
  );
}
