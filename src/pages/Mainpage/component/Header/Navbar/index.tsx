import { useState } from 'react';
import Hamburger from './Hamburger';
import Aboutme from './Aboutme';
import Travel from './Travel';
import Work from './Work';
import Contact from './Contact';
import Name from './Name';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/**Mobile */}
      <div className='flex items-center w-full h-16 bg-[#314D75] border-b-4 border-white sm:hidden'>
        <button className='pl-2 cursor-pointer' onClick={handleClick}>
          <Hamburger />
        </button>
      </div>

      {/**Overlay when menu is open */}
      {isOpen && (
        <div className='fixed inset-0 bg-black/50' onClick={handleClick} />
      )}

      {/**Slide-in menu from left */}
      <div
        className={`fixed top-0 left-0 h-full w-1/2 bg-white z-20 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='p-4'>
          <div className='flex justify-end items-center'>
            <button
              className='text-[#314D75] text-2xl font-bold hover:text-[#4f5cce] cursor-pointer'
              onClick={handleClick}
            >
              ✕
            </button>
          </div>
          <div className='flex flex-col mt-12 gap-6'>
            <Aboutme />
            <Travel />
            <Work />
            <Contact />
          </div>
        </div>
      </div>

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
