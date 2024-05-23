'use client';
import Input, { InputProps } from '@/app/components/atoms/Input';
import Text from '@/app/components/atoms/Text';
import { useField } from 'formik';

type InputFieldProps = {
  name: string;
  label: string | null;
} & InputProps;

export default function InputField({ label, ...rest }: InputFieldProps) {
  const [field] = useField(rest);

  const withLabel = label !== null;
  return (
    <div className='ju flex'>
      {withLabel && (
        <Text as='label' variant='label' className='mr-1'>
          {label}
        </Text>
      )}
      <Input {...field} {...rest} />
    </div>
  );
}
