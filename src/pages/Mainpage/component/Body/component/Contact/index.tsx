import TitleDivider from '../TitleDivider';
import TitleRight from '../TitleDivider/TitleRight';
import ContactDetail from './Detail';

interface ContactProps {
  sectionRef?: React.RefObject<HTMLDivElement | null>;
}

const Contact = ({ sectionRef }: ContactProps) => {
  return (
    <>
      {/**Mobile */}
      <div className='flex flex-col gap-6 sm:hidden'>
        <div className='flex items-center' ref={sectionRef}>
          <TitleDivider text='CONTACT' />
        </div>
        <div className='w-full h-auto bg-white p-8 flex flex-col justify-center gap-4'>
          <ContactDetail />
        </div>
      </div>

      {/**Desktop */}
      <div className='hidden md:flex flex-col gap-6 pb-14'>
        <div className='flex items-center' ref={sectionRef}>
          <TitleRight text='CONTACT' />
        </div>
        <div className='flex'>
          <div className='bg-[#EEEE] w-full h-96 mx-12 rounded-[36px] shadow-[0px_8px_4px_8px_rgb(255,255,255,0.36)] p-4 flex flex-col justify-center items-center gap-4 lg:flex-row lg:justify-center lg:gap-44'>
            <div>
              <ContactDetail />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
