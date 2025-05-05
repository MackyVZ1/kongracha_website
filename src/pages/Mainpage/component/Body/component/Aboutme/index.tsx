import AboutmeDesc from './AboutmeDesc';
import AboutmeSlide from './AboutmeSlide';
import AboutmeTitle from './AboutmeTitle';

const Aboutme = () => {
  return (
    <>
      {/**Mobile */}
      <div className='flex flex-col gap-6'>
        <div className='flex items-center'>
          <AboutmeTitle />
        </div>
        <div className='w-full h-auto bg-white p-10 '>
          <AboutmeSlide />
          <AboutmeDesc />
        </div>
      </div>
    </>
  );
};

export default Aboutme;
