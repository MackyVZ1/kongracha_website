import Aboutme from './component/Aboutme';
import Contact from './component/Contact';
import ImageSlideshow from './component/ImageSlideshow';
import Travel from './component/Travel';
import Work from './component/Work';

const Body = () => {
  return (
    <div className='flex flex-col gap-6'>
      <ImageSlideshow />
      <Aboutme />
      <Travel />
      <Work />
      <Contact />
    </div>
  );
};

export default Body;
