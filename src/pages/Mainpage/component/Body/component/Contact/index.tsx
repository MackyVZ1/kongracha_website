import TitleDivider from '../TitleDivider';
import ContactDetail from './Detail';

const Contact = () => {
  return (
    <>
      {/**Mobile */}
      <div className='flex flex-col gap-6 sm:hidden'>
        <div className='flex items-center'>
          <TitleDivider text='CONTACT' />
        </div>
        <div className='w-full h-auto bg-white p-8 flex flex-col justify-center'>
          <div className='text-center font-th font-bold text-[24px] text-[#314D75]'>
            <h1>JOIN ME</h1>
          </div>
          <ContactDetail />
        </div>
      </div>
    </>
  );
};

export default Contact;
