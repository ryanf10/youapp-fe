import { Form, Formik } from 'formik';
import InputField from '@/app/components/molecules/InputField';
import PasswordInputField from '@/app/components/molecules/PasswordInputField';
import Button from '@/app/components/atoms/Button';
import Text from '@/app/components/atoms/Text';
import useAuthStore from '@/store/useAuthStore';
import { createProfileService } from '@/services/create-profile-service';
import { toast } from 'react-hot-toast';
import {
  getFromLocalStorage,
  getLocalProfileFromLocalStorage,
} from '@/lib/helpers';
import { updateProfileService } from '@/services/update-profile-service';
import { useRef, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import Image from 'next/image';
import SelectField from '@/app/components/molecules/SelectField';
import { getProfileService } from '@/services/get-profile-service';

type FormProfileProps = {
  handleBack(): void;
};
export default function FormProfile({ handleBack }: FormProfileProps) {
  const login = useAuthStore.useLogin();
  const user = useAuthStore.useUser();
  const localProfile = getLocalProfileFromLocalStorage();

  const [image, setImage] = useState<string | null>(
    localProfile?.base64profile ?? null
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        if (event.target) {
          const result = event.target.result;
          if (typeof result === 'string') {
            setImage(result);
          }
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const profileInputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <div className='mt-3 flex items-center gap-3'>
        <div className='relative h-[57px] w-[57px] overflow-hidden rounded-[17px] bg-gray-800'>
          {image ? (
            <Image
              src={image}
              alt='Profile'
              layout='fill'
              objectFit='contain'
              className='rounded-full'
            />
          ) : (
            <div className='flex h-full items-center justify-center text-gray-400'>
              <FiPlus className='text-[18px]' />
            </div>
          )}
          <input
            ref={profileInputRef}
            type='file'
            accept='image/*'
            className='absolute inset-0 h-full w-full cursor-pointer opacity-0'
            onChange={handleImageChange}
          />
        </div>
        <button
          className='mt-2 text-sm text-gray-400'
          onClick={() => profileInputRef?.current?.click()}
        >
          Add Image
        </button>
      </div>
      <Formik
        initialValues={{
          name: user?.name ?? '',
          gender: localProfile != null ? localProfile.gender : '',
          birthday: user?.birthday ?? '',
          horoscope: user?.horoscope ?? '',
          zodiac: user?.zodiac ?? '',
          weight:
            user?.weight != undefined
              ? `${user.weight} ${
                  localProfile != null ? localProfile.weight_unit : ''
                }`
              : '',
          height:
            user?.height != undefined
              ? `${user.height} ${
                  localProfile != null ? localProfile.height_unit : ''
                }`
              : '',
        }}
        onSubmit={async (values) => {
          if (
            values.name == '' ||
            values.birthday == '' ||
            values.height == '' ||
            values.weight == ''
          ) {
            toast.error('Please complete your profile');
          }
          if (user?.name == undefined) {
            const res = await createProfileService(
              values.name,
              values.gender,
              values.birthday,
              values.horoscope,
              values.zodiac,
              values.weight,
              values.height,
              user?.interests ?? [],
              image ?? undefined
            );
            if (res.data.isSuccess) {
              handleBack();
              if (user) {
                const profile = await getProfileService();
                login({ ...user, ...profile.data.data });
              }
            }
          } else {
            const res = await updateProfileService(
              values.name,
              values.gender,
              values.birthday,
              values.horoscope,
              values.zodiac,
              values.weight,
              values.height,
              user?.interests ?? [],
              image ?? undefined
            );
            if (res.data.isSuccess) {
              handleBack();
              if (user) {
                const profile = await getProfileService();
                login({ ...user, ...profile.data.data });
              }
            }
          }
        }}
      >
        {({ values }) => (
          <Form>
            <InputField
              containerClassName='mt-3'
              className='h-[36px] w-full p-[18px] text-right'
              name='name'
              placeholder='Enter name'
              label='Display name:'
              type='text'
            />
            <SelectField
              containerClassName='mt-3'
              name='gender'
              label='Gender'
              className='h-[36px] w-full text-right'
              placeholder='Select Gender'
              options={[
                { label: 'Male', value: 'Male' },
                { label: 'Female', value: 'Female' },
              ]}
            />
            <InputField
              containerClassName='mt-3'
              className='h-[36px] w-full p-[18px] text-right'
              name='birthday'
              placeholder='DD MM YYYY'
              label='Birthday'
              type='text'
            />
            <InputField
              containerClassName='mt-3'
              className='h-[36px] w-full p-[18px] text-right'
              name='horoscope'
              placeholder='--'
              label='Horoscope:'
              type='text'
              disabled={true}
            />
            <InputField
              containerClassName='mt-3'
              className='h-[36px] w-full p-[18px] text-right'
              name='zodiac'
              placeholder='--'
              label='Zodiac:'
              type='text'
              disabled={true}
            />
            <InputField
              containerClassName='mt-3'
              className='h-[36px] w-full p-[18px] text-right'
              name='height'
              placeholder='Add Height'
              label='Height:'
              type='text'
            />
            <InputField
              containerClassName='mt-3'
              className='h-[36px] w-full p-[18px] text-right'
              name='weight'
              placeholder='Add Weight'
              label='Weight'
              type='text'
            />

            <Text
              as='button'
              type='submit'
              className='text-custom-yellow absolute right-8 top-8 text-[13px] font-[500] disabled:cursor-not-allowed'
              disabled={
                values.name == '' ||
                values.birthday == '' ||
                values.height == '' ||
                values.weight == ''
              }
            >
              Save & Update
            </Text>
          </Form>
        )}
      </Formik>
    </>
  );
}
