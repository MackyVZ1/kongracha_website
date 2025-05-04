import WorkImage from './Image';
import WorkText from './Typography';

const Work = () => {
  return (
    <div className='flex items-center gap-2 cursor-pointer transform transition-all duration-150 hover:opacity-70'>
      <WorkImage />
      <WorkText />
    </div>
  );
};

export default Work;
