import './styles.scss';
import Heart from '../../assets/footer/heart.svg';

const Footer = () => {
    return (
        <div className='footer-container'>
          <div className="content-1">
            <p>Made with</p>
            <img src={Heart} className='heart'/>
            <p>by UCSD Design Co</p>
          </div>
          <div className='content-2'>
            <p>hello@ucsddesign.co</p>
          </div>
        </div>
    )
}

export default Footer;
