import { FiChevronLeft } from 'react-icons/fi';
import Link from 'next/link';
import React from 'react';

type BackLinkProps = {
  href: string;
} & React.ComponentPropsWithoutRef<'a'>;
export default function BackLink({ href }: BackLinkProps) {
  return (
    <>
      <Link href={href}>
        <button className='my-4 flex items-center justify-center text-white'>
          <FiChevronLeft />
          Back
        </button>
      </Link>
    </>
  );
}
