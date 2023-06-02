export function Schedule() {
  return (
    <div className='xl:w-5/6 m-auto mb-10'>
      <section className='flex flex-wrap'>
        <div className='flex w-full lg:w-1/2'>
          <div className='m-4 border rounded w-full'>
            <div className='flex-1 m-4 p-4 text-center'>
              <div className='text-2xl uppercase font-bold mb-8'>Lifting Schedule</div>
              <div className='mb-8'>
                <div className='text-lg font-bold'>Friday, 30th June, 2023</div>
                <div>Men&apos;s Tested (KG): 56, 60, 67.5, 75</div>
                <div>Women&apos;s Tested (KG): 48, 52, 56, 60, 67.5, 75, 82.5</div>
                <div className='mt-2'>Warmup: 8:00am</div>
                <div>Lifting Begins: 9:00am</div>
              </div>
              <div className='mb-8'>
                <div className='text-lg font-bold'>Saturday, 1st July, 2023</div>
                <div>Men&apos;s Tested (KG): 82.5, 90, 100, 125, 140, 140+</div>
                <div>Women&apos;s Tested (KG): 90, 100, 110, 110+</div>
                <div className='mt-2'>Warmup: 8:00am</div>
                <div>Lifting Begins: 9:00am</div>
              </div>
              <div className='mb-8'>
                <div className='text-lg font-bold'>Sunday 2nd July, 2023</div>
                <div>Men&apos;s & Women&apos;s (KG): All untested lifters</div>
                <div className='mt-2'>Warmup: 9:00am</div>
                <div>Lifting Begins: 10:00am</div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex w-full lg:w-1/2'>
          <div className='m-4 border rounded w-full'>
            <div className='flex-1 m-4 p-4 text-center'>
              <div className='text-2xl uppercase font-bold mb-8'>Weigh-In &amp; Gear Check Schedule</div>
              <div className='mb-8'>
                <div className='text-lg font-bold'>Thursday, 29th June, 2023</div>
                <div>Men&apos;s Tested (KG): 56, 60, 67.5, 75</div>
                <div>Women&apos;s Tested (KG): 48, 52, 56, 60, 67.5, 75, 82.5</div>
                <div className='mt-2'>
                  10:00am to 4:00pm
                  <br />
                  5:00pm to 7:00pm
                </div>
              </div>
              <div className='mb-8'>
                <div className='text-lg font-bold'>Friday, 30th June, 2023</div>
                <div>Men&apos;s Tested (KG): 82.5, 90, 100, 125, 140, 140+</div>
                <div>Women&apos;s Tested (KG): 90, 100, 110, 110+</div>
                <div className='mt-2'>
                  10:00am to 4:00pm
                  <br />
                  5:00pm to 7:00pm
                </div>
              </div>
              <div className='mb-8'>
                <div className='text-lg font-bold'>Saturday, 1st July, 2023</div>
                <div>Men&apos;s & Women&apos;s (KG): All untested lifters</div>
                <div className='mt-2'>
                  10:00am to 4:00pm
                  <br />
                  5:00pm to 7:00pm
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
