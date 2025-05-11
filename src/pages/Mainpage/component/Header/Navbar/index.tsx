import { useState } from 'react';
import Hamburger from './Hamburger';
import Aboutme from './Aboutme';
import Travel from './Travel';
import Work from './Work';
import Contact from './Contact';
import Name from './Name';
import NameMobile from './NameMobile';
import { Divider } from 'antd';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/**Mobile */}
      <div className='flex items-center w-full h-16 bg-[#314D75] border-b-4 sticky z-30 top-0 border-white gap-14 sm:hidden'>
        <button
          className='pl-2 cursor-pointer z-50 relative'
          onClick={handleClick}
        >
          <Hamburger />
        </button>
        <div className='flex'>
          <NameMobile />
        </div>
      </div>

      {/**Slide-in menu that covers the entire height including navbar */}
      <div
        className={`fixed top-0 left-0 h-screen w-1/2 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='flex flex-col h-full'>
          <div className='h-16 bg-white flex items-center justify-end px-4'>
            <button
              className='text-gray-400 text-xl font-bold cursor-pointer'
              onClick={handleClick}
            >
              ✕
            </button>
          </div>
          <div className='p-6 flex flex-col gap-6'>
            <Aboutme />
            <Travel />
            <Work />
            <Contact />
            <Divider
              style={{ borderColor: '#314D75', marginTop: 300, borderWidth: 1 }}
            />
          </div>
        </div>
      </div>

      {/**Overlay when menu is open */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black/50 z-30 top-0'
          onClick={handleClick}
        />
      )}

      {/**Desktop */}
      <div className='hidden sm:flex items-center justify-between w-full h-24 bg-[#314D75] border-b-4 border-white pr-4 lg:pr-8'>
        <Name />
        <div className='flex gap-6 lg:gap-8 xl:gap-12'>
          <Aboutme />
          <Travel />
          <Work />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Navbar;
