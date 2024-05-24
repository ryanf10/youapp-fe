import { CiEdit } from 'react-icons/ci';
import Text from '@/app/components/atoms/Text';
import Card from '@/app/components/molecules/Card';
import useAuthStore from '@/store/useAuthStore';
import Link from 'next/link';

export default function Interest() {
  const user = useAuthStore.useUser();
  return (
    <>
      <Card cardTitle='Interest' className='mt-5 p-8'>
        <div className='absolute right-5 top-8 h-[18px] w-[18px]'>
          <Link href='/interest'>
            <CiEdit className='text-[18px]' />
          </Link>
        </div>
        {user?.interests.length == 0 && (
          <Text variant='secondary' className='mt-5'>
            Add in your interest to find a better match
          </Text>
        )}
        {user?.interests && user.interests.length > 0 && (
          <div className='mt-5 flex flex-wrap gap-[10px]'>
            {user.interests.map((interest, index) => {
              return (
                <div
                  key={index}
                  className='w-fit rounded-[100px] bg-white bg-opacity-[0.06] px-[16px] py-[8px]'
                >
                  {interest}
                </div>
              );
            })}
          </div>
        )}
      </Card>
    </>
  );
}
