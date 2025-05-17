import AboutmeImage from './Image';
import AboutmeText from './Typography';

interface AboutmeProps {
  active?: boolean;
}

const Aboutme = ({ active }: AboutmeProps) => {
  return (
    <div className='flex items-center gap-2 cursor-pointer transform transition-all duration-150 hover:opacity-70'>
      <AboutmeImage active={active} />
      <AboutmeText />
    </div>
  );
};

export default Aboutme;
