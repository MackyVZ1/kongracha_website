interface Props {
  imgSrc: string;
  children?: React.ReactNode;
}

const HomeLayout = ({ imgSrc, children }: Props) => {
  return (
    <>
      <img
        src={imgSrc}
        alt='backgroundImage'
        className='absolute w-full h-full object-cover overflow-hidden'
      />
      {children}
    </>
  );
};

export default HomeLayout;
