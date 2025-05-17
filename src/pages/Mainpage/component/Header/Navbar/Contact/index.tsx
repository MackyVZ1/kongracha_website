import ContactImage from './Image';
import ContactText from './Typography';

interface ContactProps {
  active?: boolean;
}

const Contact = ({ active }: ContactProps) => {
  return (
    <div className='flex items-center gap-2 cursor-pointer transform transition-all duration-150 hover:opacity-70 '>
      <ContactImage active={active} />
      <ContactText />
    </div>
  );
};

export default Contact;
