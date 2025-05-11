import img1 from '../../../../../../../assets/pbank/work/LINE_ALBUM_My work_250504_1.jpg';
import img2 from '../../../../../../../assets/pbank/work/LINE_ALBUM_My work_250504_10.jpg';
import img3 from '../../../../../../../assets/pbank/work/LINE_ALBUM_My work_250504_11.jpg';
import img4 from '../../../../../../../assets/pbank/work/LINE_ALBUM_My work_250504_12.jpg';
import img5 from '../../../../../../../assets/pbank/work/LINE_ALBUM_My work_250504_13.jpg';
import img6 from '../../../../../../../assets/pbank/work/LINE_ALBUM_My work_250504_14.jpg';
import img7 from '../../../../../../../assets/pbank/work/LINE_ALBUM_My work_250504_15.jpg';
import img8 from '../../../../../../../assets/pbank/work/LINE_ALBUM_My work_250504_16.jpg';
import img9 from '../../../../../../../assets/pbank/work/LINE_ALBUM_My work_250504_17.jpg';
import img11 from '../../../../../../../assets/pbank/work/LINE_ALBUM_My work_250504_19.jpg';
import img12 from '../../../../../../../assets/pbank/work/LINE_ALBUM_My work_250504_20.jpg';
import img13 from '../../../../../../../assets/pbank/work/LINE_ALBUM_My work_250504_2.jpg';
import img14 from '../../../../../../../assets/pbank/work/LINE_ALBUM_My work_250504_3.jpg';
import img16 from '../../../../../../../assets/pbank/work/LINE_ALBUM_My work_250504_5.jpg';
import img17 from '../../../../../../../assets/pbank/work/LINE_ALBUM_My work_250504_6.jpg';
import img18 from '../../../../../../../assets/pbank/work/LINE_ALBUM_My work_250504_7.jpg';
import img19 from '../../../../../../../assets/pbank/work/LINE_ALBUM_My work_250504_8.jpg';
import img20 from '../../../../../../../assets/pbank/work/LINE_ALBUM_My work_250504_9.jpg';

const WorkSlide = () => {
  const images = [
    {
      src: img1,
      name: 1,
    },
    {
      src: img2,
      name: 1,
    },
    {
      src: img3,
      name: 1,
    },
    {
      src: img4,
      name: 1,
    },
    {
      src: img5,
      name: 1,
    },
    {
      src: img6,
      name: 1,
    },
    {
      src: img7,
      name: 1,
    },
    {
      src: img8,
      name: 1,
    },
    {
      src: img9,
      name: 1,
    },
    {
      src: img11,
      name: 1,
    },
    {
      src: img12,
      name: 1,
    },
    {
      src: img13,
      name: 1,
    },
    {
      src: img14,
      name: 1,
    },
    {
      src: img16,
      name: 1,
    },
    {
      src: img17,
      name: 1,
    },
    {
      src: img18,
      name: 1,
    },
    {
      src: img19,
      name: 1,
    },
    {
      src: img20,
      name: 1,
    },
  ];

  return (
    <div className='flex flex-row space-x-4 w-max gap-4'>
      {images.map((item, index) => (
        <div
          className='rounded-[36px] bg-[#EEEE] shadow-[0px_8px_4px_8px_rgb(255,255,255,0.36)] p-4 w-64 h-80 '
          key={index}
        >
          <div className='flex flex-col text-center h-full'>
            <div className='w-full h-full'>
              <img
                src={item.src}
                className='object-cover w-full h-full rounded-[36px]'
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkSlide;
