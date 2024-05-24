import { useState } from 'react';
import AboutUser from '@/app/components/organisms/AboutUser';
import Text from '@/app/components/atoms/Text';
import useAuthStore from '@/store/useAuthStore';
import UserPicture from '@/app/components/organisms/UserPicture';
import Interest from '@/app/components/organisms/Interest';
import BackLink from '@/app/components/molecules/BackLink';

export default function UserInfo() {
  const user = useAuthStore.useUser();
  return (
    <div className='mx-auto max-w-md'>
      <div className='flex items-center justify-between'>
        <BackLink href='#' />
        <div className='absolute left-1/2 -translate-x-1/2 transform text-center'>
          <Text as='h1' className='text-center'>{`@${user?.username}`}</Text>
        </div>
      </div>
      <UserPicture />

      <AboutUser />

      <Interest />
    </div>
  );
}
