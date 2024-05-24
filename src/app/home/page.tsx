'use client';
import WithAuth from '@/app/components/hoc/WithAuth';
import useAuthStore from '@/store/useAuthStore';
import Card from '@/app/components/molecules/Card';
import UserInfo from '@/app/components/organisms/UserInfo';

export default WithAuth(HomePage, 'required');
function HomePage() {
  const user = useAuthStore.useUser();
  return (
    <main className='bg-custom-bg-color min-h-screen w-full p-4'>
      <UserInfo />
    </main>
  );
}
