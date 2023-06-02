import Image from 'next/image';
import { A } from '@atoms';

import bpfLogo from '../../images/bpf.png';
import strengthShop from '../../images/sponsors/strength-shop.jpg';
import strictCurlFed from '../../images/sponsors/strict-curl-federation.jpg';

export function Sponsors() {
  return (
    <section className='xl:w-5/6 m-auto mb-10'>
      <div className='text-3xl uppercase font-bold m-4 text-center'>Thank you to our sponsors</div>
      <div className='flex justify-center mb-4'>
        <div className='mx-4'>
          <A href='https://www.bplf.co.uk/' target='_blank'>
            <Image src={bpfLogo} alt='British Powerlifting Federation' width={125} />
          </A>
        </div>
        <div className='mx-4'>
          <A href='https://www.strengthshop.co.uk/' target='_blank'>
            <Image src={strengthShop} alt='Strength Shop' />
          </A>
        </div>
        <div className='mx-4'>
          <Image src={strictCurlFed} alt='Strict Curl Federation' />
        </div>
      </div>
      <div className='text-center'>
        Are you interested in being a sponsor? Contact{' '}
        <A href='mailto:bpf.secretary@gmail.com'>bpf.secretary@gmail.com</A>.
      </div>
    </section>
  );
}
