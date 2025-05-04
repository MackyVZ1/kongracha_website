import AboutmeImage from './Image';
import AboutmeText from './Typography';

const Aboutme = () => {
  return (
    <div className='flex items-center gap-2 cursor-pointer transform transition-all duration-150 hover:opacity-70'>
      <AboutmeImage />
      <AboutmeText />
    </div>
  );
};

export default Aboutme;
