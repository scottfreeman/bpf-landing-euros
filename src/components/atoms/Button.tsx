import React, { PropsWithChildren } from 'react';
import Link from 'next/link';

interface Props {
  href: string;
  className?: string;
  target?: '_blank';
}

export const Button: React.FC<PropsWithChildren<Props>> = ({ href, className, target, children }) => {
  return (
    <Link
      href={href}
      target={target}
      className={`inline-block bg-red-600 text-white py-3 px-16 uppercase rounded-full hover:bg-red-500 font-bold text-center ${className}`}
    >
      {children}
    </Link>
  );
};
