import './styles.scss';
import Heart from '../../assets/footer/heart.svg';

const Footer = () => {
  return (
    <>
     
      <footer className="footer-container">
        <div className="content-1">
          <p>Made with</p>
          <img src={Heart} className="heart" />
          <p>by UCSD Design Co</p>
        </div>
        <div className="content-2">
          <a href="mailto:designatucsd@gmail.com">designatucsd@gmail.com</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
