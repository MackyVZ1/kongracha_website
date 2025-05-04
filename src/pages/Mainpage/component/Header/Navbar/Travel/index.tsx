import TravelImage from './Image';
import TravelText from './Typography';

const Travel = () => {
  return (
    <div className='flex items-center gap-2 cursor-pointer transform transition-all duration-150 hover:opacity-70'>
      <TravelImage />
      <TravelText />
    </div>
  );
};

export default Travel;
