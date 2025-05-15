import { useState } from 'react';
import FacebookImg from '../Image/Facebook';
import InstagramImg from '../Image/Instagram';
import LineImg from '../Image/Line';
import TiktokImg from '../Image/Tiktok';
import lineQr from '../../../../../../../assets/pbank/lineqr/lineqr.jpg';

const ContactDetail = () => {
  const [isClick, setIsClick] = useState(false);

  const handleLineClick = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      <div className='flex flex-col justify-center p-auto m-auto gap-6 xl:flex-row xl:items-center xl:gap-22'>
        <div className='flex items-center gap-4'>
          <div className='bg-[#314D75] w-[42px] h-[42px] rounded-[36px] flex justify-center items-center lg:w-[52px] lg:h-[52px]'>
            <FacebookImg />
          </div>
          <a
            href='https://www.facebook.com/Wathee.kongracha.bank'
            className='font-th font-medium text-[#314D75] text-[18px] lg:text-[22px]'
          >
            วาที กองราชา
          </a>
        </div>
        <div className='flex items-center gap-4 '>
          <div className='bg-[#314D75] w-[42px] h-[42px] rounded-[36px] flex justify-center items-center lg:w-[52px] lg:h-[52px]'>
            <InstagramImg />
          </div>
          <a
            href='https://www.instagram.com/wathee_bank/'
            className='font-en font-medium text-[#314D75] text-[18px] lg:text-[22px]'
          >
            wathee_bank
          </a>
        </div>
        <div className='flex items-center gap-4 '>
          <div className='bg-[#314D75] w-[42px] h-[42px] rounded-[36px] flex justify-center items-center lg:w-[52px] lg:h-[52px]'>
            <TiktokImg />
          </div>
          <a
            href='https://www.tiktok.com/@watheeaiamdrt?is_from_webapp=1&sender_device=pc'
            className='font-en font-medium text-[#314D75] text-[18px] lg:text-[22px]'
          >
            watheeaiamdrt
          </a>
        </div>
        <div className='flex items-center gap-4'>
          <div className='bg-[#314D75] w-[42px] h-[42px] rounded-[36px] flex justify-center items-center lg:w-[52px] lg:h-[52px]'>
            <LineImg />
          </div>
          <a
            className='font-en font-medium text-[#314D75] text-[18px] lg:text-[22px]'
            onClick={handleLineClick}
          >
            Wathee_NT577
          </a>
        </div>
      </div>

      {isClick === true && (
        <div className='fixed right-0 top-0 left-0 bottom-0 z-40 bg-gray-200/50 flex items-center'>
          <div className='absolute bg-white flex flex-col z-50 px-6 pt-6 pb-10 m-6 rounded-[36px] transition-all transform duration-150'>
            <div
              className='flex justify-end items-center'
              onClick={handleLineClick}
            >
              <h1 className='font-en font-bold text-2xl text-gray-300 cursor-pointer hover:text-gray-500'>
                ✕
              </h1>
            </div>
            <div>
              <img src={lineQr} alt='lineQr' />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactDetail;
