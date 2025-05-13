import TitleDivider from '../TitleDivider';
import TitleLeftDivider from '../TitleDivider/TitleLeft';
import AboutmeDesc from './AboutmeDesc';
import AboutmeSlide from './AboutmeSlide';

interface AboutmeProps {
  sectionRef?: React.RefObject<HTMLDivElement>;
}

const Aboutme = ({ sectionRef }: AboutmeProps) => {
  return (
    <>
      {/**Mobile */}
      <div ref={sectionRef}>
        <div className='flex flex-col gap-6 sm:hidden'>
          <div className='flex items-center'>
            <TitleDivider text='ABOUT ME' />
          </div>
          <div className='w-full h-auto bg-white p-6'>
            <AboutmeSlide />
            <AboutmeDesc />
          </div>
        </div>
      </div>

      {/**Desktop */}
      <div className='hidden sm:flex flex-col'>
        <div className='flex items-center pl-8'>
          <TitleLeftDivider text='ABOUT ME' />
        </div>
        <div className='px-10 flex '>
          <div className='w-full h-auto p-6 bg-white rounded-[36px]'>
            <div className='flex  items-center'>
              <AboutmeSlide />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
