import Body from './component/Body';
import Navbar from './component/Header/Navbar';
import MainpageLayout from './Layout';
import { useRef, RefObject } from 'react';

export type SectionKey = 'about' | 'travel' | 'work' | 'contact';

export type SectionRefs = {
  [key in SectionKey]: RefObject<HTMLDivElement | null>;
};

const Mainpage = () => {
  const sectionRefs: SectionRefs = {
    about: useRef<HTMLDivElement>(null),
    travel: useRef<HTMLDivElement>(null),
    work: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (key: SectionKey) => {
    console.log('SCROLL TO SECTION:', key);
    const element = sectionRefs[key]?.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      console.log('Element position:', rect);
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <MainpageLayout>
      <Navbar onNavigate={scrollToSection} />
      <Body sectionRefs={sectionRefs} />
    </MainpageLayout>
  );
};

export default Mainpage;
