import React from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = {
  variant: 'base' | 'gradient';
} & React.ComponentPropsWithRef<'button'>;

export default function Button({
  children,
  type,
  variant,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      type={type}
      className={cn(
        'relative w-full rounded-[8px] py-2 text-[16px] font-[700] text-white focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-500',
        variant == 'gradient' &&
          'from-button-gradient-start to-button-gradient-end bg-gradient-to-r',
        className
      )}
    >
      {children}
      {rest.disabled && (
        <div className='absolute inset-0 rounded-[8px] bg-gray-500 opacity-50'></div>
      )}
    </button>
  );
}
