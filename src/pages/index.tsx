import Head from 'next/head';
import { NextSeo } from 'next-seo';

import { Header, Footer, Hotel, Main, Registration, Schedule, Sponsors } from '@sections';

export default function Home() {
  return (
    <div className='bg-white text-black'>
      <NextSeo
        title='European & Commonwealth Powerlifting Championships'
        description='European & Commonwealth Powerlifting Championships in Mansfield, UK on 30th June to 2nd July, 2023. Hosted by the British Powerlifting Federation.'
      />
      <Head>
        <title>
          European & Commonwealth Powerlifting Championships 2023 | 30th June - 2nd July 2023 | Mansfield, UK
        </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Main />
      <Schedule />
      <Registration />
      <Hotel />
      <Sponsors />
      <Footer />
    </div>
  );
}
