import img from '../../../../../../../assets/pbank/aboutme/LINE_ALBUM_About me_250504_28.jpg';

const AboutmeImg = () => {
  return (
    <>
      <img
        src={img}
        alt='AboutmeImg'
        className='w-full h-72 object-cover rounded-2xl sm:h-84 lg:h-120 xl:w-full xl:h-full '
      />
    </>
  );
};

export default AboutmeImg;
