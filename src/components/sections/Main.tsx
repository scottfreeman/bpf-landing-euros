import Countdown, { CountdownRenderProps } from 'react-countdown';
import { A, Button } from '@atoms';

export function Main() {
  const date = new Date('2023-06-30 09:00:00');

  const countdownRenderer = ({ completed, formatted }: CountdownRenderProps) => {
    if (!completed) {
      return (
        <div className='flex'>
          <div className='flex flex-col items-center m-2 lg:m-4'>
            <div className='bg-gradient-to-b from-red-500 to-red-900 rounded text-white p-2 lg:p-5 text-2xl lg:text-5xl'>
              <span suppressHydrationWarning={true}>{formatted.days}</span>
            </div>
            <div className='uppercase text-xs lg:text-sm'>Days</div>
          </div>
          <div className='flex flex-col items-center m-2 lg:m-4'>
            <div className='bg-gradient-to-b from-red-500 to-red-900 rounded text-white p-2 lg:p-5 text-2xl lg:text-5xl'>
              <span suppressHydrationWarning={true}>{formatted.hours}</span>
            </div>
            <div className='uppercase text-xs lg:text-sm'>Hours</div>
          </div>
          <div className='flex flex-col items-center m-2 lg:m-4'>
            <div className='bg-gradient-to-b from-red-500 to-red-900 rounded text-white p-2 lg:p-5 text-2xl lg:text-5xl'>
              <span suppressHydrationWarning={true}>{formatted.minutes}</span>
            </div>
            <div className='uppercase text-xs lg:text-sm'>Minutes</div>
          </div>
          <div className='flex flex-col items-center m-2 lg:m-4'>
            <div className='bg-gradient-to-b from-red-500 to-red-900 rounded text-white p-2 lg:p-5 text-2xl lg:text-5xl'>
              <span suppressHydrationWarning={true}>{formatted.seconds}</span>
            </div>
            <div className='uppercase text-xs lg:text-sm'>Seconds</div>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <section className='bg-black text-white py-8 lg:py-10 flex flex-col items-center text-center'>
        <div className='mb-8'>
          <div className='text-4xl lg:text-5xl font-bold mb-12 uppercase'>
            European & Commonwealth
            <br />
            Powerlifting Championships 2023
          </div>
          <div className='text-2xl lg:text-4xl font-bold mb-2 uppercase'>Old Tyme Strength</div>
          <div className='text-2xl'>Victoria Street, Mansfield, NG18 5RR</div>
        </div>
        <div className='text-2xl lg:text-4xl font-bold mb-8 uppercase'>
          30<sup className='lowercase text-sm lg:-top-5'>th</sup> June - 2
          <sup className='lowercase text-sm lg:-top-5'>nd</sup> July, 2023
        </div>
        <div>
          <Countdown date={date} renderer={countdownRenderer} />
        </div>
      </section>

      <section className='lg:grid grid-cols-2 items-stretch flex-wrap xl:w-5/6 m-auto'>
        <div className='flex w-full'>
          <div className='flex flex-col flex-1 bg-gray-200 rounded m-4 p-4 w-full h-96 lg:h-auto'>
            <div>
              <div className='uppercase text-sm mb-2'>Event Location</div>
              <div className='text-lg lg:text-xl mb-2'>Old Tyme Strength, Victoria Street, Mansfield, NG18 5RR</div>
            </div>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2393.2711904269045!2d-1.204087023491505!3d53.14122737223046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879bdf6b1283487%3A0x31651680befde124!2sOld%20Tyme%20Strength!5e0!3m2!1sen!2suk!4v1685693710552!5m2!1sen!2suk'
              width='600'
              loading='lazy'
              className='w-full flex-1 '
            ></iframe>
          </div>
        </div>
        <div className='flex w-full'>
          <div className='flex-1 bg-gray-200 rounded m-4 p-4'>
            <div className='uppercase text-sm mb-2'>Event Information</div>
            <div className='mb-2'>
              <span className='font-bold'>Spectators fee:</span>
              <br />
              &pound;10 each day for 16 years old and over.
              <br />
              Lifting begins 9am on Friday & Saturday, 10am on Sunday.
            </div>
            <div className='mb-2'>
              <span className='font-bold'>Powerlifting bars used:</span>
              <br />
              Squat bar: 25kg Capps Texas Squat Bar.
              <br />
              Bench bar: 20kg Capps Texas Power Bar.
              <br />
              Deadlift bar: 20kg Capps Texas Deadlift Bar.
            </div>
            <div className='mb-2'>
              <span className='font-bold'>Meet Directors:</span>
              <div className='md:flex justify-start items-start align-top'>
                <div className='md:w-1/2 mb-2 md:mb-0'>
                  Marcus Griffiths
                  <div className='lg:text-sm'>
                    British Powerlifting Federation president.
                    <br />
                    IPL European & Commonwealth president.
                  </div>
                </div>
                <div className='md:w-1/2'>
                  Lady Petra Kent
                  <div className='lg:text-sm'>
                    British Powerlifting Federation vice-president.
                    <br />
                    IPL general secretary.
                  </div>
                </div>
              </div>
            </div>
            <div className='mb-2'>
              <span className='font-bold'>Contact:</span>
              <br />
              <A href='mailto:bpf.secretary@gmail.com'>bpf.secretary@gmail.com</A>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
