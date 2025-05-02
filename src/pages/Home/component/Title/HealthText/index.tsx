import Heart from './HeartImage';
import { useEffect, useState } from 'react';

const HealthText = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`flex justify-center items-center  transform transition-all duration-1000 
      ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-4 opacity-0 sm:translate-y-0 sm:translate-x-4 '
      }`}
    >
      <h1 className='font-en text-[36px] font-bold bg-linear-to-b from-[#F2F2F2] from-44% to-[#8C8C8C] bg-clip-text text-transparent drop-shadow-[3px_4px_4px_black] sm:text-[48px]'>
        LIFE
      </h1>
      <Heart />
    </div>
  );
};

export default HealthText;
