import TitleDivider from '../TitleDivider';
import WorkSlide from './WorkSlide';
import { CSSProperties } from 'react';

interface WorkProps {
  sectionRef?: React.RefObject<HTMLDivElement>;
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
      <div className='flex flex-col gap-6 sm:hidden'>
        <div className='flex items-center' ref={sectionRef}>
          <TitleDivider text='WORK' />
        </div>
        <div
          className='w-full h-auto px-6 pb-8 text-center overflow-x-scroll'
          style={scrollbarHideStyles}
        >
          <WorkSlide />
        </div>
      </div>
    </>
  );
};

export default Work;
