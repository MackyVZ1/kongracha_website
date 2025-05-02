import TaxText from './TaxText';
import TitleTh from './TitleTh';
import HealthText from './HealthText';
import InsuranceText from './InsuranceText';
import EnterButton from '../Button';
import MyImage from '../MyImage';
import myImg from '../../../../assets/pbank_without_bg-Photoroom_new.png';

const Title = () => {
  return (
    <>
      {/**Mobile */}
      <div className='relative flex flex-col justify-center h-screen items-center gap-4 overflow-hidden sm:hidden'>
        <TaxText />
        <HealthText />
        <InsuranceText />
        <TitleTh />
        <EnterButton />
      </div>

      {/**Desktop */}
      <div className='hidden sm:relative sm:flex sm:flex-col sm:justify-center sm:items-center gap-4 h-screen'>
        <MyImage imgSrc={myImg} />
        <div
          className='flex justify-center gap-x-4 pl-7'
          style={{ marginTop: -100 }}
        >
          <TaxText />
          <HealthText />
          <InsuranceText />
        </div>
        <TitleTh />
        <EnterButton />
      </div>
    </>
  );
};

export default Title;
