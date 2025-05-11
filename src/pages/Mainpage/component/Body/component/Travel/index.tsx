import TitleDivider from '../TitleDivider';
import TravelSlide from './TravelSlide';
import { CSSProperties } from 'react';

const Travel = () => {
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
      <div className='flex flex-col gap-6'>
        <div className='flex items-center'>
          <TitleDivider text='TRAVEL' />
        </div>
        <div
          className='w-full h-auto px-6 pb-8 overflow-x-scroll scroll-smooth'
          style={scrollbarHideStyles}
        >
          <TravelSlide />
        </div>
      </div>
    </>
  );
};

export default Travel;
