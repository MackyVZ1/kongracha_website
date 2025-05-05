import { Carousel } from 'antd';
import imgSlide1 from '../../../../../../../assets/pbank/aboutme/LINE_ALBUM_About me_250504_20.jpg';
import imgSlide2 from '../../../../../../../assets/pbank/aboutme/LINE_ALBUM_About me_250504_24.jpg';
import imgSlide3 from '../../../../../../../assets/pbank/aboutme/LINE_ALBUM_About me_250504_22.jpg';
import imgSlide4 from '../../../../../../../assets/pbank/aboutme/LINE_ALBUM_About me_250504_17.jpg';

const AboutmeSlide = () => {
  const originImage: string[] = [imgSlide1, imgSlide2, imgSlide3, imgSlide4];

  const images = [...originImage, ...originImage, ...originImage];

  const carouselSettings = {
    autoplay: true,
    effect: 'fade',
    dots: false, // ซ่อนจุดนำทางในโหมด desktop
    pauseOnHover: false,
    autoplaySpeed: 3000,
    slidesToShow: 1, // แสดง 3 รูปพร้อมกันบน desktop, 1 รูปบน mobile
    slidesToScroll: 1, // เลื่อนครั้งละ 1 รูป
    infinite: true,
    speed: 800, // ความเร็วในการเปลี่ยนรูป
    cssEase: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)', // ทำให้การเลื่อนดูลื่นไหล
    centerMode: false, // ปิด centerMode เพื่อลดช่องว่าง
    centerPadding: '0', // ไม่มี padding สำหรับ centerMode
    arrows: false, // ซ่อนปุ่มนำทางซ้าย-ขวา
  };
  return (
    <Carousel {...carouselSettings}>
      {images.map((image, index) => (
        <div key={index} className='flex justify-center items-center'>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className='w-full h-64 object-cover rounded-2xl'
          />
        </div>
      ))}
    </Carousel>
  );
};

export default AboutmeSlide;
