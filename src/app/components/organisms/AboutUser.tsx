import { useState } from 'react';
import { CiEdit } from 'react-icons/ci';

import { getLocalProfileFromLocalStorage } from '@/lib/helpers';

import useAuthStore from '@/store/useAuthStore';

import Text from '@/app/components/atoms/Text';
import ButtonLink from '@/app/components/molecules/ButtonLink';
import Card from '@/app/components/molecules/Card';
import FormProfile from '@/app/components/organisms/FormProfile';

export default function AboutUser() {
  const [aboutState, setAboutState] = useState<'about' | 'form'>('about');
  const user = useAuthStore.useUser();
  const localProfile = getLocalProfileFromLocalStorage();
  return (
    <>
      <Card cardTitle='About' className='mt-5 p-8'>
        {aboutState == 'about' && (
          <>
            <div className='absolute right-5 top-8 h-[18px] w-[18px]'>
              <ButtonLink
                href='#'
                leftIcon={CiEdit}
                className='my-0'
                onClick={() => setAboutState('form')}
              />
            </div>
            {user?.name == undefined ? (
              <Text variant='secondary' className='mt-5'>
                Add in your your to help others know you better
              </Text>
            ) : (
              <>
                <div className='mt-5 flex flex-col gap-2'>
                  <Text as='p' variant='secondary'>
                    Birthday: {user.birthday}
                  </Text>
                  <Text as='p' variant='secondary'>
                    Horoscope: {user.horoscope}
                  </Text>
                  <Text as='p' variant='secondary'>
                    Zodiac: {user.zodiac}
                  </Text>
                  <Text as='p' variant='secondary'>
                    Height: {user.height}{' '}
                    {localProfile != null ? localProfile.height_unit : ''}
                  </Text>
                  <Text as='p' variant='secondary'>
                    Weight: {user.weight}{' '}
                    {localProfile != null ? localProfile.weight_unit : ''}
                  </Text>
                </div>
              </>
            )}
          </>
        )}
        {aboutState == 'form' && (
          <>
            <FormProfile
              handleBack={() => {
                setAboutState('about');
              }}
            />
          </>
        )}
      </Card>
    </>
  );
}
