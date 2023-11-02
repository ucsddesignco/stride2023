import './styles.scss';
import Pointer from '../../assets/featuredcompanies/pointer.svg';

const Apply = () => {
  return (
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
  );
};

export default Apply;
