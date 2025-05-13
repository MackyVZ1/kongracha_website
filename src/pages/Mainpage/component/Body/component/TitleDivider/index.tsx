interface Props {
  text: string;
}

const TitleDivider = ({ text }: Props) => {
  return (
    <>
      <div className='w-[20%] h-1 bg-white ml-6 md:h-3.5 md:ml-12 md:w-[50%]'></div>
      <div className='text-center w-full'>
        <h1 className='font-en font-extrabold text-[32px] text-white md:text-[48px] lg:text-[56px]'>
          {text}
        </h1>
      </div>
      <div className='w-[20%] h-1 bg-white mr-6 md:h-3.5 md:mr-12 md:w-[50%]'></div>
    </>
  );
};

export default TitleDivider;
