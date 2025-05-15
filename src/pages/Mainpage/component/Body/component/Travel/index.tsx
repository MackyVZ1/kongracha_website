import TitleDivider from '../TitleDivider';
import TravelSlide from './TravelSlide';
import { CSSProperties } from 'react';

interface TravelProps {
  sectionRef?: React.RefObject<HTMLDivElement | null>;
}

const Travel = ({ sectionRef }: TravelProps) => {
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
      <div className='flex flex-col gap-6 md:hidden'>
        <div className='flex items-center' ref={sectionRef}>
          <TitleDivider text='TRAVEL' />
        </div>
        <div
          className='w-full h-auto px-6 pb-8 overflow-x-scroll scroll-smooth'
          style={scrollbarHideStyles}
        >
          <TravelSlide />
        </div>
      </div>

      {/**Desktop */}
      <div className='hidden md:flex flex-col gap-6'>
        <div className='flex items-center' ref={sectionRef}>
          <TitleDivider text='TRAVEL' />
        </div>
        <div
          className='w-full h-auto px-6 pb-8 overflow-x-scroll scroll-smooth lg:px-12'
          style={scrollbarHideStyles}
        >
          <TravelSlide />
        </div>
      </div>
    </>
  );
};

export default Travel;
