import Directory from '../../components/directory/directory.component';
import categories from '../../components/Data/homeCategorysData';

const Home = () => {

  return <Directory categories={categories} />;
};

export default Home;