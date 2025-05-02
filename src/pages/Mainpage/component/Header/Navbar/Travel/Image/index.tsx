const TravelImage = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='800px'
      height='800px'
      viewBox='0 0 24 24'
      fill='none'
      className='w-5 h-5 lg:w-8 lg:h-8'
    >
      <path
        d='M8 6C8 4.89543 8.89543 4 10 4H14C15.1046 4 16 4.89543 16 6V20H8V6Z'
        stroke='#currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        className='stroke-[#314D75] sm:stroke-white'
      />
      <rect
        x='3'
        y='8'
        width='18'
        height='12'
        rx='2'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        className='stroke-[#314D75] sm:stroke-white'
      />
    </svg>
  );
};

export default TravelImage;
