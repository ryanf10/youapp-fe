'use client';
import FormInterest from '@/app/components/organisms/FormInterest';
import WithAuth from '@/app/components/hoc/WithAuth';

export default WithAuth(InterestPage, 'required');
function InterestPage() {
  return (
    <>
      <main className='bg-custom-gradient min-h-screen w-full p-4'>
        <FormInterest />
      </main>
    </>
  );
}
