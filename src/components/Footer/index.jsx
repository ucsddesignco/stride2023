import './styles.scss';
import Heart from '../../assets/footer/heart.svg';
import Pointer from '../../assets/featuredcompanies/pointer.svg';

const Footer = () => {
  return (
    <>
      <div className="apply">
        <div className="left-content">
          <p>
            Ready to stride <br /> and meet company <br /> recruiters?
          </p>
        </div>
        <div className="right-content">
          <img src={Pointer} />
          <a
            className="apply-button"
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Register</p>
            <br/>
            <p>Now →</p>
          </a>
        </div>
      </div>
      <div className="footer-container">
        <div className="content-1">
          <p>Made with</p>
          <img src={Heart} className="heart" />
          <p>by UCSD Design Co</p>
        </div>
        <div className="content-2">
          <a href="mailto:designatucsd@gmail.com">designatucsd@gmail.com</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
