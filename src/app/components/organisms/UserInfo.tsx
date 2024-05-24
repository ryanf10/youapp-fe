import { useState } from 'react';
import AboutUser from '@/app/components/organisms/AboutUser';
import Text from '@/app/components/atoms/Text';
import useAuthStore from '@/store/useAuthStore';
import UserPicture from '@/app/components/organisms/UserPicture';
import Interest from '@/app/components/organisms/Interest';

export default function UserInfo() {
  const user = useAuthStore.useUser();
  return (
    <div className='mx-auto max-w-md'>
      <div className='flex justify-center'>
        <Text as='h1'>{`@${user?.username}`}</Text>
      </div>
      <UserPicture />

      <AboutUser />

      <Interest />
    </div>
  );
}
