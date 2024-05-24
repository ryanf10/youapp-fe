import Card from '@/app/components/molecules/Card';
import Text from '@/app/components/atoms/Text';
import useAuthStore from '@/store/useAuthStore';
import { getLocalProfileFromLocalStorage } from '@/lib/helpers';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function UserPicture() {
  const user = useAuthStore.useUser();
  const [localProfile, setLocalProfile] = useState<any>();

  useEffect(() => {
    // Function to read the profile from localStorage
    const getProfileFromLocalStorage = () => {
      setLocalProfile(getLocalProfileFromLocalStorage());
    };

    // Read the initial profile from localStorage
    getProfileFromLocalStorage();

    // Event listener to handle localStorage changes from other tabs
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'profile') {
        getProfileFromLocalStorage();
      }
    };

    // Event listener for custom 'localStorageUpdate' event
    const handleLocalStorageUpdate = () => {
      getProfileFromLocalStorage();
    };

    // Add event listener for storage changes and custom events
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('localStorageUpdate', handleLocalStorageUpdate);

    // Cleanup the event listeners on component unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener(
        'localStorageUpdate',
        handleLocalStorageUpdate
      );
    };
  }, []);

  return (
    <>
      <Card cardTitle={null} className='mt-5 h-[190px]'>
        {localProfile?.base64profile && (
          <Image
            src={localProfile.base64profile}
            alt='Profile'
            layout='fill'
            objectFit='cover'
            className='rounded-[17px]'
          />
        )}
        <div className='absolute bottom-5 left-5'>
          <Text as='h1' className=''>{`@${user?.username}`}</Text>
          {localProfile?.gender && (
            <Text as='h1' className=''>{`${localProfile.gender}`}</Text>
          )}
        </div>
      </Card>
    </>
  );
}
