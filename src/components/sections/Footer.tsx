import Image from 'next/image';
import { A } from '@atoms';

export function Footer() {
  return (
    <footer className='bg-gray-200 text-black'>
      <div className='container px-5 py-8 mx-auto flex flex-col items-center'>
        <div className='text-xs'>&copy; 2023 British Powerlifting Federation. All Rights Reserved.</div>
      </div>
    </footer>
  );
}
