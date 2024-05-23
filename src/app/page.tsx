import Image from 'next/image';
import Button from '@/app/components/atoms/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='bg-custom-gradient flex min-h-screen flex-col items-center justify-between'>
      <div className='mt-16 w-4/5'>
        <Link href='/login'>
          <Button variant='gradient'>Login</Button>
        </Link>
      </div>
    </main>
  );
}
