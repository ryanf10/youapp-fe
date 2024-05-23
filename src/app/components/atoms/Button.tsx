import React from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = {
  variant: 'base' | 'gradient';
} & React.ComponentPropsWithRef<'button'>;

export default function Button({
  children,
  type,
  variant,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      type={type}
      className={cn(
        'relative w-full rounded-md py-2 text-[16px] font-[700] text-white focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-500',
        variant == 'gradient' &&
          'from-button-gradient-start to-button-gradient-end bg-gradient-to-r'
      )}
    >
      {children}
      {rest.disabled && (
        <div className='absolute inset-0 rounded bg-gray-500 opacity-50'></div>
      )}
    </button>
  );
}
