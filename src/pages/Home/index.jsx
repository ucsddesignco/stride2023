import { useEffect } from 'react';
import HeroText from '../../components/HeroText/index';
import FerrisWheel from '../../components/FerrisWheel';
import Clouds from '../../svgs/Clouds/index';
import HeroSVG from '../../svgs/HeroSVG/index';
import './styles.scss';
import Lighthouse from '../../components/Lighthouse';
import { Link } from 'react-router-dom';
import Apply from '../../components/Apply';

function Home() {
  useEffect(() => {
    document.documentElement.scrollTo(0, 0); 
    
    if (window.innerWidth < 768) {
      return;
    }
    
    let lastScrollTop = 0;
    const heroText = document.querySelector('.hero-text');
    const heroSVG = document.querySelector('.hero-svg-container');
    const heroTextRect = heroText.getBoundingClientRect();
    const heroSVGRect = heroSVG.getBoundingClientRect();

    const combinedHeight = heroSVGRect.height + heroTextRect.height + 75;

    heroSVG.style.marginBottom = `${heroTextRect.height + 75 + 75}px`;

    const handleScroll = () => {
      const hasScrolled = document.documentElement.scrollTop;

      if (hasScrolled > combinedHeight / 2) {
        return;
      }

      let currScrollTop = window.scrollY;
      if (currScrollTop > lastScrollTop) {
        heroText.style.transform = `translateY(${combinedHeight}px)`;
      } else {
        heroText.style.transform = 'translateY(10px)';
      }

      lastScrollTop = currScrollTop;
    };
    document.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="home-page">
      <div className="hero-container">
        <HeroText />
        <div className="hero-svg-container">
          <Clouds />
          <HeroSVG />
        </div>
      </div>
      <div className="content">
        <div className="card-container">
          <Link to="/about" className="card">
            <div className="card-image">
              <FerrisWheel />
            </div>
            <h3>What is stride <br/> about?</h3>
            <p>Learn more →</p>
          </Link>
          <Link to="/companies" className="card">
            <div className='card-image'>
              <Lighthouse/>
            </div>
            <h3>Which companies are attending stride?</h3>
            <p>Learn more →</p>
          </Link>
        </div>
        <hr />
      </div>
      <Apply/>
    </main>
  );
}

export default Home;
