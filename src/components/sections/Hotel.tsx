import { A } from '@atoms';

export function Hotel() {
  return (
    <section className='bg-white text-black flex flex-wrap xl:w-3/4 2xl:w-1/2 m-auto mb-10'>
      <div className='m-4 bg-gray-200 w-full rounded flex flex-wrap'>
        <div className='md:w-1/2 p-4'>
          <div className='text-2xl uppercase font-bold'>Taxis</div>
          <ul className='list-disc list-outside mt-2 ml-5'>
            <li className='list-item'>
              <span className='font-bold'>ACE-ABC Taxis</span>
              <br />
              <span>01623 654 321</span>
              <br />
              <A target='_blank' href='https://www.ace-abc.co.uk/'>
                Website
              </A>
            </li>
            <li className='list-item mt-2'>
              <span className='font-bold'>652s Taxis</span>
              <br />
              <span>01623 622 222</span>
              <br />
              <A target='_blank' href='http://www.652s.co.uk/'>
                Website
              </A>
            </li>
          </ul>
          <div className='text-sm mt-2'>
            We offer this list as a convenience, not as a recommendation. Other taxi firms are available.
          </div>
        </div>
        <div className='md:w-1/2 p-4'>
          <div className='text-2xl mb-2 uppercase font-bold'>Parking</div>
          <div className='mb-2'>
            Very limited free on-site and street parking is available for the duration of the event.
          </div>
          <div className='mb-2'>
            Pay & Display parking available, closest is{' '}
            <A href='https://goo.gl/maps/uS9gcDNKgDGRMVAf8' target='_blank'>
              Victoria Street Car Park
            </A>
            .
          </div>
          <div className='mb-2'>
            Additional Pay & Display parking available a short walk away at{' '}
            <A href='https://www.mansfield.gov.uk/directory-record/23/walkden-street-car-park' target='_blank'>
              Walkden Street car park
            </A>
            .
          </div>
        </div>
      </div>
    </section>
  );
}
