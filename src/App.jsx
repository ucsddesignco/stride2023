import About from './pages/About';
import FeaturedCompanies from './pages/FeaturedCompanies';
import Footer from './components/Footer';
import './styles/base.scss';
import './App.scss';
import HeroText from './components/HeroText/HeroText';
import HeroSVG from './svgs/HeroSVG/HeroSVG';
import Clouds from './svgs/Clouds/Clouds';
import { useEffect } from 'react';
import Navbar from './components/HeroText/Navbar/Navbar';

function App() {
  

  useEffect(() => {
    if (window.innerWidth < 768) {
      return;
    }
    let lastScrollTop = 0;
    const heroText = document.querySelector('.hero-text');
    const heroSVG = document.querySelector('.hero-svg-container');
    const heroTextRect = heroText.getBoundingClientRect();
    const heroSVGRect = heroSVG.getBoundingClientRect();

    const combinedHeight = heroSVGRect.height + heroTextRect.height + 75;

    const handleScroll = () => {
      const hasScrolled = document.documentElement.scrollTop;

      if (hasScrolled > combinedHeight/2) {
        return;
      }

      let currScrollTop = window.scrollY;
      if (currScrollTop > lastScrollTop) {
        heroText.style.transform = `translateY(${combinedHeight}px)`;
      } else  {
        heroText.style.transform = 'translateY(10px)';
      }

      lastScrollTop = currScrollTop;
    };
    document.addEventListener('scroll', handleScroll);

  }, []);

  

  return (
    <>
    <Navbar />
      <div className="hero-container">
        <HeroText />
        <div className="hero-svg-container">
          <Clouds />
          <HeroSVG />
        </div>

      </div>
     <About />
     <FeaturedCompanies />
     <Footer />
    </>
  );
}

export default App;
