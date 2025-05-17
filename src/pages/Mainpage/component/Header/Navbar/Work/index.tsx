import WorkImage from './Image';
import WorkText from './Typography';

interface WorkProps {
  active?: boolean;
}

const Work = ({ active }: WorkProps) => {
  return (
    <div className='flex items-center gap-2 cursor-pointer transform transition-all duration-150 hover:opacity-70'>
      <WorkImage active={active} />
      <WorkText />
    </div>
  );
};

export default Work;
