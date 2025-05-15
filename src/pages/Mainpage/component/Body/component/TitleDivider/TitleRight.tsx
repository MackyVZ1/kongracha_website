interface Props {
  text: string;
}

const TitleRight = ({ text }: Props) => {
  return (
    <>
      <div className='w-[100%] h-3.5 bg-white ml-12'></div>
      <div className='text-center w-[80%]'>
        <h1 className='font-en font-extrabold text-[48px] text-white lg:text-[56px]'>
          {text}
        </h1>
      </div>
    </>
  );
};

export default TitleRight;
