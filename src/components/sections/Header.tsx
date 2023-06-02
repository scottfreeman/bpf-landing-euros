import Image from 'next/image';

import logoImage from '../../images/logo.jpg';

export function Header() {
  return (
    <header className='bg-black'>
      <div className='bg-black container pt-8 px-4 mx-auto flex justify-center'>
        <Image src={logoImage} alt='European & Commonwealth Powerlifting Championships 2023' height={400}></Image>
      </div>
    </header>
  );
}
