'use client';
import WithAuth from '@/app/components/hoc/WithAuth';
import useAuthStore from '@/store/useAuthStore';

export default WithAuth(HomePage, 'required');
function HomePage() {
  const user = useAuthStore.useUser();
  return <>{JSON.stringify(user, null, 2)}</>;
}
