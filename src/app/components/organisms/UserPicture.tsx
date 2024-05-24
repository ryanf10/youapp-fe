import Card from '@/app/components/molecules/Card';
import Text from '@/app/components/atoms/Text';
import useAuthStore from '@/store/useAuthStore';
import { getLocalProfileFromLocalStorage } from '@/lib/helpers';
import Image from 'next/image';

export default function UserPicture() {
  const user = useAuthStore.useUser();
  const localProfile = getLocalProfileFromLocalStorage();
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
          <Text as='h1' className=''>{`${localProfile?.gender}`}</Text>
        </div>
      </Card>
    </>
  );
}
