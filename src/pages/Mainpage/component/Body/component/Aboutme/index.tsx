import TitleDivider from '../TitleDivider';
import TitleLeftDivider from '../TitleDivider/TitleLeft';
import AboutmeDesc from './AboutmeDesc';
import AboutmeImg from './AboutmeSlide';

interface AboutmeProps {
  sectionRef?: React.RefObject<HTMLDivElement | null>;
}

const Aboutme = ({ sectionRef }: AboutmeProps) => {
  return (
    <>
      {/**Mobile */}
      <div className='flex flex-col gap-6 sm:hidden' ref={sectionRef}>
        <div className='flex items-center'>
          <TitleDivider text='ABOUT ME' />
        </div>
        <div className='w-full h-auto bg-white p-6'>
          <AboutmeImg />
          <AboutmeDesc />
        </div>
      </div>

      {/**Desktop */}
      <div className='hidden sm:flex flex-col gap-6' ref={sectionRef}>
        <div className='flex items-center'>
          <TitleLeftDivider text='ABOUT ME' />
        </div>
        <div className='px-10 flex '>
          <div className='w-full h-auto p-2 bg-white rounded-[36px]'>
            <div className='w-full h-auto bg-white p-6 flex flex-col gap-4 rounded-[36px] justify-center items-center'>
              <AboutmeImg />
              <AboutmeDesc />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
