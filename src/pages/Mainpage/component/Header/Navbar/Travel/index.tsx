import TravelImage from './Image';
import TravelText from './Typography';

interface TravelProps {
  active?: boolean;
}

const Travel = ({ active }: TravelProps) => {
  return (
    <div className='flex items-center gap-2 cursor-pointer transform transition-all duration-150 hover:opacity-70'>
      <TravelImage active={active} />
      <TravelText />
    </div>
  );
};

export default Travel;
