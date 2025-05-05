import Aboutme from './component/Aboutme';
import ImageSlideshow from './component/ImageSlideshow';

const Body = () => {
  return (
    <div className='flex flex-col gap-6'>
      <ImageSlideshow />
      <Aboutme />
    </div>
  );
};

export default Body;
