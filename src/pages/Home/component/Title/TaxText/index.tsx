import { useEffect, useState } from 'react';

const TaxText = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Delay in milliseconds (1 second)

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);
  return (
    <div
      className={`flex justify-center  transform transition-all duration-1000 
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
    >
      <h1
        className={`font-en text-[36px] font-bold bg-linear-to-b from-[#F2F2F2] from-44% to-[#8C8C8C] bg-clip-text text-transparent drop-shadow-[3px_4px_4px_black] sm:hidden`}
      >
        TAX
      </h1>
      <h1
        className={`hidden font-en text-[36px] font-bold bg-linear-to-b from-[#F2F2F2] from-44% to-[#8C8C8C] bg-clip-text text-transparent drop-shadow-[3px_4px_4px_black] sm:flex sm:text-[48px]`}
      >
        TAX |
      </h1>
    </div>
  );
};

export default TaxText;
