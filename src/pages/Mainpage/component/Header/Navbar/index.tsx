import Aboutme from './Aboutme';
import Travel from './Travel';
import Work from './Work';
import Contact from './Contact';
import Name from './Name';
import type { SectionKey } from '../../..';

const Navbar = ({ onNavigate }: { onNavigate: (key: SectionKey) => void }) => {
  return (
    <>
      {/**Mobile */}
      <div className='flex justify-center items-center w-full h-16 bg-[#314D75] border-b-4 sticky z-50 top-0 border-white sm:hidden'>
        <div className='flex flex-col justify-center h-full'>
          <div className='px-6 flex gap-6'>
            <h1 className='font-en font-extrabold text-white text-xl'>
              WATHEE KONGRACHA
            </h1>
          </div>
        </div>
      </div>

      {/**Desktop */}
      <div className='hidden sm:flex items-center justify-between w-full h-24 bg-[#314D75] border-b-4 border-white pr-4 lg:pr-8'>
        <Name />
        <div className='flex gap-6 lg:gap-8 xl:gap-12'>
          <button
            onClick={() => {
              onNavigate('about');
            }}
          >
            <Aboutme />
          </button>
          <button
            onClick={() => {
              onNavigate('travel');
            }}
          >
            <Travel />
          </button>
          <button
            onClick={() => {
              onNavigate('work');
            }}
          >
            <Work />
          </button>
          <button
            onClick={() => {
              onNavigate('contact');
            }}
          >
            <Contact />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
