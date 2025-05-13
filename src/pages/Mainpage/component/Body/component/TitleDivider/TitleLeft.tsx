interface Props {
  text: string;
}

const TitleLeftDivider = ({ text }: Props) => {
  return (
    <>
      <div className='text-center w-[80%]'>
        <h1 className='font-en font-extrabold text-[48px] text-white lg:text-[56px]'>
          {text}
        </h1>
      </div>
      <div className='w-[100%] h-3.5 bg-white mr-12'></div>
    </>
  );
};

export default TitleLeftDivider;
