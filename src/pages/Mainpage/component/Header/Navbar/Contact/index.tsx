import ContactImage from './Image';
import ContactText from './Typography';

const Contact = () => {
  return (
    <div className='flex items-center gap-2'>
      <ContactImage />
      <ContactText />
    </div>
  );
};

export default Contact;
