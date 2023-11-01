import Navbar from '../../components/Navbar/Navbar';
import './styles.scss';

export default function ErrorPage() {
  return (
    <div className='error-container'>
      <Navbar />
      <main>
        <h1>Error: Page not found.</h1>
        <p>Please go back to the home page!</p>
      </main>
    </div>
  );
}
