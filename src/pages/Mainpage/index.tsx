import Body from './component/Body';
import Navbar from './component/Header/Navbar';
import MainpageLayout from './Layout';
import { useRef } from 'react';

const Mainpage = () => {
  const sectionRefs = {
    about: useRef(null),
    travel: useRef(null),
    work: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (key: keyof typeof sectionRefs) => {
    sectionRefs[key]?.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <MainpageLayout>
      <Navbar onNavigate={scrollToSection} />
      <Body sectionRefs={sectionRefs} />
    </MainpageLayout>
  );
};

export default Mainpage;
