import Insurance from './InsuranceImage';
import { useEffect, useState } from 'react';

const InsuranceText = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4000); // Delay in milliseconds (1 second)

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);
  return (
    <div
      className={`flex justify-center items-center  transform transition-all duration-1000 sm:gap-x-2 
      ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-4 opacity-0 sm:translate-y-0 sm:translate-x-4'
      }`}
    >
      <Insurance />
      <h1 className='font-en text-[36px] font-bold bg-linear-to-b from-[#F2F2F2] from-44% to-[#8C8C8C] bg-clip-text text-transparent drop-shadow-[3px_4px_4px_black] sm:text-[48px]'>
        INSURANCE
      </h1>
    </div>
  );
};

export default InsuranceText;
