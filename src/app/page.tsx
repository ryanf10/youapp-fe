import Image from 'next/image';
import Button from '@/app/components/atoms/Button';
import Link from 'next/link';
import Text from '@/app/components/atoms/Text';
import Input from '@/app/components/atoms/Input';

export default function Home() {
  return (
    <main className='bg-custom-gradient flex min-h-screen flex-col items-center justify-between'>
      <div className='mt-16 w-4/5'>
        <Link href='/login'>
          <Button variant='gradient'>Login</Button>
        </Link>
        <Text as='h1' variant='secondary' className='mt-5'>
          Register
        </Text>
        <Input className='mt-5 h-[51px] w-full p-[18px]'></Input>
      </div>
    </main>
  );
}
