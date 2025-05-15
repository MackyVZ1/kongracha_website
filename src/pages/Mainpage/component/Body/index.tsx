import Aboutme from './component/Aboutme';
import Contact from './component/Contact';
import ImageSlideshow from './component/ImageSlideshow';
import Travel from './component/Travel';
import Work from './component/Work';
import FadeInOnScroll from './component/FadeInScroll';
import type { SectionRefs } from '../..';

interface BodyProps {
  sectionRefs: SectionRefs;
}

const Body = ({ sectionRefs }: BodyProps) => {
  return (
    <div className='flex flex-col gap-6'>
      <ImageSlideshow />
      <FadeInOnScroll>
        <Aboutme sectionRef={sectionRefs.about} />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Travel sectionRef={sectionRefs.travel} />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Work sectionRef={sectionRefs.work} />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Contact sectionRef={sectionRefs.contact} />
      </FadeInOnScroll>
    </div>
  );
};

export default Body;
