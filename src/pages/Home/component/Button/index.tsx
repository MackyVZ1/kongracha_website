import { useEffect, useState } from 'react';

const EnterButton = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 6000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);
  return (
    <div>
      <button
        className={`font-th text-white text-[14px] border-2 border-white w-[170px] h-[44px] rounded-[50px] transform transition-all duration-300 cursor-pointer hover:bg-white hover:text-[#9FB1EE]
          sm:w-[209px] sm:h-[53px] sm:text-[20px]
          ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
      >
        เข้าสู่เว็บไซต์
      </button>
    </div>
  );
};

export default EnterButton;
