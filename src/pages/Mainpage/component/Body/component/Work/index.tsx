import TitleDivider from '../TitleDivider';
import WorkSlide from './WorkSlide';
import { CSSProperties } from 'react';

interface WorkProps {
  sectionRef?: React.RefObject<HTMLDivElement | null>;
}

const Work = ({ sectionRef }: WorkProps) => {
  const scrollbarHideStyles: CSSProperties = {
    // สำหรับ Firefox
    scrollbarWidth: 'none',
    // สำหรับ IE, Edge
    msOverflowStyle: 'none',
    // สำหรับ Chrome, Safari และ Opera
    WebkitOverflowScrolling: 'touch',
  };

  return (
    <>
      {/**Mobile */}
      <div className='flex flex-col gap-6 sm:hidden' ref={sectionRef}>
        <div className='flex items-center'>
          <TitleDivider text='WORK' />
        </div>
        <div
          className='w-full h-auto px-6 pb-8 text-center overflow-x-scroll'
          style={scrollbarHideStyles}
        >
          <WorkSlide />
        </div>
      </div>

      {/**Desktop */}
      <div className='hidden md:flex flex-col gap-6' ref={sectionRef}>
        <div className='flex items-center'>
          <TitleDivider text='WORK' />
        </div>
        <div
          className='w-full h-auto px-6 pb-8 text-center overflow-x-scroll scroll-smooth lg:px-12'
          style={scrollbarHideStyles}
        >
          <WorkSlide />
        </div>
      </div>
    </>
  );
};

export default Work;
