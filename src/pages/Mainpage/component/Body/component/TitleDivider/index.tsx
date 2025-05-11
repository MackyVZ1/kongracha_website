interface Props {
  text: string;
}

const TitleDivider = ({ text }: Props) => {
  return (
    <>
      <div className='w-[30%] h-1 bg-white'></div>
      <div className='text-center w-full'>
        <h1 className='font-en font-extrabold text-[36px] text-white'>
          {text}
        </h1>
      </div>
      <div className='w-[30%] h-1 bg-white'></div>
    </>
  );
};

export default TitleDivider;
