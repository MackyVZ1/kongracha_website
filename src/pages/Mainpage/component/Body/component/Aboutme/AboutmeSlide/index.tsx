import { Carousel } from 'antd';
import type { CarouselProps } from 'antd';
import imgSlide1 from '../../../../../../../assets/pbank/aboutme/LINE_ALBUM_About me_250504_20.jpg';
import imgSlide2 from '../../../../../../../assets/pbank/aboutme/LINE_ALBUM_About me_250504_28.jpg';
import imgSlide3 from '../../../../../../../assets/pbank/aboutme/LINE_ALBUM_About me_250504_22.jpg';
import imgSlide4 from '../../../../../../../assets/pbank/aboutme/LINE_ALBUM_About me_250504_17.jpg';

const AboutmeSlide = () => {
  const originImage: string[] = [imgSlide1, imgSlide2, imgSlide3, imgSlide4];

  const images = [...originImage, ...originImage, ...originImage];

  const carouselSettings: CarouselProps = {
    autoplay: true,
    effect: 'fade',
    dots: false,
    pauseOnHover: false,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 800,
    cssEase: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)',
    centerMode: false,
    centerPadding: '0',
    arrows: false,
  };

  return (
    <div className='w-full '>
      <Carousel {...carouselSettings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className='w-full h-72 object-cover rounded-2xl sm:w-72 sm:h-84 '
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default AboutmeSlide;
