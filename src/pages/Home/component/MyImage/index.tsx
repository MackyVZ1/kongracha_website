import './index.css';
import { useEffect, useState } from 'react';

interface Props {
  imgSrc: string;
}

const MyImage = ({ imgSrc }: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Delay in milliseconds (1 second)

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);
  return (
    <div
      className={`flex justify-center items-center transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <img
        src={imgSrc}
        alt='MyImage'
        className='sm:max-w-[429px] sm:max-h-[594px] image-fading'
      />
    </div>
  );
};

export default MyImage;
