import ContactImage from './Image';
import ContactText from './Typography';

const Contact = () => {
  return (
    <div className='flex items-center gap-2 cursor-pointer transform transition-all duration-150 hover:opacity-70 '>
      <ContactImage />
      <ContactText />
    </div>
  );
};

export default Contact;
