import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';
import banner from '../../assets/banner.png';

const Home = () => {
  return (
    <div>
      {/* <img src={banner} style={{ width: '100%' }} /> */}
      <Directory />;
      <Outlet />
    </div>
  );
};

export default Home;
