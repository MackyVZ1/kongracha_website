import HomeLayout from './Layout';
import bgImg from '../../assets/new_bg_1.png';
import Title from './component/Title';

const Home = () => {
  return (
    <HomeLayout imgSrc={bgImg}>
      <Title />
    </HomeLayout>
  );
};

export default Home;
