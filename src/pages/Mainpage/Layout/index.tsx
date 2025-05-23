interface Props {
  children: React.ReactNode;
}

const MainpageLayout = ({ children }: Props) => {
  return <div className='bg-[#314D75] w-full h-auto absolute'>{children}</div>;
};

export default MainpageLayout;
