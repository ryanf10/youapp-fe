import FormLogin from '@/app/components/organisms/FormLogin';
import Link from 'next/link';
import { FiChevronLeft } from 'react-icons/fi';

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
        <h2 className='ml-2 mt-16 text-2xl font-bold text-white'>Login</h2>

        <FormLogin />
      </div>
    </main>
  );
}
