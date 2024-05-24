import FormLogin from '@/app/components/organisms/FormLogin';
import Link from 'next/link';
import { FiChevronLeft } from 'react-icons/fi';
import Text from '@/app/components/atoms/Text';

export default function LoginPage() {
  return (
    <main className='bg-custom-gradient min-h-screen w-full p-4'>
      <div className='mx-auto w-full max-w-md'>
        <Link href='/'>
          <button className='my-4 flex items-center justify-center text-white'>
            <FiChevronLeft />
            Back
          </button>
        </Link>

        <Text as='h1' variant='title' className='ml-2 mt-16'>
          Login
        </Text>

        <FormLogin />
      </div>
    </main>
  );
}
