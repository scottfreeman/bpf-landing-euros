import { Button } from '@atoms';

export function Registration() {
  return (
    <div className='bg-gray-200 px-4 mt:px-0'>
      <section className='flex flex-wrap xl:w-3/4 2xl:w-1/2 m-auto mb-10'>
        <div className='m-auto p-4 text-center'>
          <div className='text-4xl uppercase font-bold mb-2'>Registration</div>
          <div className='mb-2'>
            You must submit your entry form before the 7th of June, 2023.
            <br />
            Late entries will not be accepted.
            <br />
            No refunds or transfers. All sale are final.
          </div>
          <div className='mb-4'>
            <Button
              href='https://docs.google.com/forms/d/e/1FAIpQLSd9OnCOZePekwzdfp7gKYRaSa0fLr6ImS_X1QflHINJPEcOAw/viewform'
              target='_blank'
              className='text-3xl'
            >
              Register Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
