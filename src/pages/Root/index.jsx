import './styles.scss';
import '../../styles/base.scss';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/index';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
