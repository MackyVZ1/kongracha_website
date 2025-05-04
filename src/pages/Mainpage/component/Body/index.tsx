interface Props {
  children: React.ReactNode;
}
const Body = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Body;
