import { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import type { CarouselProps } from 'antd';
import imgSlide1 from '../../../../../../assets/pbank/aboutme/LINE_ALBUM_About me_250504_2.jpg';
import imgSlide2 from '../../../../../../assets/pbank/aboutme/LINE_ALBUM_About me_250504_6.jpg';
import imgSlide3 from '../../../../../../assets/pbank/aboutme/LINE_ALBUM_About me_250504_28.jpg';
import imgSlide4 from '../../../../../../assets/pbank/aboutme/LINE_ALBUM_About me_250504_9.jpg';
import imgSlide5 from '../../../../../../assets/pbank/aboutme/LINE_ALBUM_About me_250504_4.jpg';
import imgSlide6 from '../../../../../../assets/pbank/aboutme/LINE_ALBUM_About me_250504_7.jpg';
import imgSlide7 from '../../../../../../assets/pbank/aboutme/LINE_ALBUM_About me_250504_12.jpg';
import imgSlide8 from '../../../../../../assets/pbank/aboutme/LINE_ALBUM_About me_250504_19.jpg';
import imgSlide9 from '../../../../../../assets/pbank/aboutme/LINE_ALBUM_About me_250504_11.jpg';
import imgSlide10 from '../../../../../../assets/pbank/aboutme/LINE_ALBUM_About me_250504_21.jpg';
const ImageSlideshow = () => {
  // เก็บรายการรูปภาพที่จะแสดง
  const originalImages: string[] = [
    imgSlide1,
    imgSlide2,
    imgSlide3,
    imgSlide4,
    imgSlide5,
    imgSlide6,
    imgSlide7,
    imgSlide8,
    imgSlide9,
    imgSlide10,
    // เพิ่มรูปภาพเพิ่มเติมที่นี่
  ];

  const images = [...originalImages, ...originalImages, ...originalImages];
  // สถานะเก็บข้อมูลว่าเป็น desktop หรือไม่
  const [isDesktop, setIsDesktop] = useState(false);

  // ตรวจสอบขนาดหน้าจอเมื่อ component โหลด และเมื่อ resize
  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024); // 768px เป็นขนาด breakpoint ของ desktop
    };

    // เช็คตอนโหลดครั้งแรก
    checkIsDesktop();

    // เพิ่ม event listener สำหรับเมื่อ resize หน้าจอ
    window.addEventListener('resize', checkIsDesktop);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', checkIsDesktop);
    };
  }, []);

  // ตั้งค่าสำหรับ Carousel
  const carouselSettings: CarouselProps = {
    autoplay: true,
    effect: 'scrollx',
    dots: false, // ซ่อนจุดนำทางในโหมด desktop
    pauseOnHover: false,
    autoplaySpeed: 3000,
    slidesToShow: isDesktop ? 3 : 1, // แสดง 3 รูปพร้อมกันบน desktop, 1 รูปบน mobile
    slidesToScroll: 1, // เลื่อนครั้งละ 1 รูป
    infinite: true,
    speed: 800, // ความเร็วในการเปลี่ยนรูป
    cssEase: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)', // ทำให้การเลื่อนดูลื่นไหล
    centerMode: false, // ปิด centerMode เพื่อลดช่องว่าง
    centerPadding: '0', // ไม่มี padding สำหรับ centerMode
    arrows: false, // ซ่อนปุ่มนำทางซ้าย-ขวา
  };

  return (
    <div className='m-0 w-full'>
      <style>{`
        /* กำหนด CSS เพื่อลดช่องว่างระหว่างรูปภาพ */
        :global(.ant-carousel .slick-slide) {
          padding: 0 1px; /* ลดช่องว่างด้านข้างของแต่ละรูปเหลือเพียง 1px */
          transition: all 0.5s ease;
        }

        :global(.ant-carousel .slick-list) {
          margin: 0 -1px; /* ชดเชย padding ที่เพิ่มเข้าไป */
        }

        :global(.ant-carousel .slick-track) {
          transition: transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) !important;
        }

        :global(.ant-carousel .slick-dots) {
          margin-bottom: 2px;
        }

        :global(.ant-carousel .slick-dots li button) {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }
      `}</style>
      <Carousel {...carouselSettings} className='transform transition-all'>
        {images.map((image, index) => (
          <div key={index}>
            {' '}
            {/* เพิ่ม padding ด้านข้างเพื่อให้มีช่องว่างระหว่างรูป */}
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className='w-full h-[300px] object-cover md:h-[500px] lg:h-[400px]'
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSlideshow;
