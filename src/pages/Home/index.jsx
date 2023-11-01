import { useEffect } from 'react';
import HeroText from '../../components/HeroText/index';
import Clouds from '../../svgs/Clouds/index';
import HeroSVG from '../../svgs/HeroSVG/index';

function Home() {
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
    <>
      {/* <About /> */}
      <div className="hero-container">
        <HeroText />
        <div className="hero-svg-container">
          <Clouds />
          <HeroSVG />
        </div>
      </div>
      <div>
        <div>
          <h3>What is stride about?</h3>
          <p>Learn more →</p>
        </div>
        <div>
          <h3>Which companies are attending stride?</h3>
          <p>Learn more →</p>
        </div>
      </div>
    </>
  );
}

export default Home;
