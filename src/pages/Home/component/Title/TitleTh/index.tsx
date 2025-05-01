import { useEffect, useState } from 'react';

const TitleTh = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // Delay in milliseconds (1 second)

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);
  return (
    <div
      className={`flex justify-center items-center text-center pb-10 transform transition-all duration-1000
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
    >
      <h1 className='font-th font-medium text-[14px] bg-linear-to-b from-[#FFFFFF] from-80% to-[#999999] to-100% bg-clip-text text-transparent drop-shadow-[3px_4px_4px_black] sm:text-[32px]'>
        ภาษีบริษัท บุคคล มรดก ส่งต่อให้ลูกหลาน <br /> อย่างมั่นคง
      </h1>
    </div>
  );
};

export default TitleTh;
