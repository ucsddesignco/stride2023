import './styles.scss';

import Domesmobile from '../../assets/domesmobile.svg';
import Domesdesktop from '../../assets/domesdesktop.svg';

//Company Images
import Apple from '../../assets/featuredcompanies/companylogos/apple.png';
import Google from '../../assets/featuredcompanies/companylogos/google.png';
import Aops from '../../assets/featuredcompanies/companylogos/aops.png';
import Arup from '../../assets/featuredcompanies/companylogos/arup.svg';
import Illumina from '../../assets/featuredcompanies/companylogos/illumina.png';
import Conote from '../../assets/featuredcompanies/companylogos/conote.png';
import Lighthouse from '../../components/Lighthouse';
import { useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import Apply from '../../components/Apply';

const FeaturedCompanies = () => {
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, []);

  return (
    <main className="featured-container">
      <PageHeader
        headerText={['FEATURED', 'COMPANIES']}
        desc="Our participating companies come from diverse backgrounds,
        representing multiple industries, products, and services. Stop by
        Stride to connect with professionals and learn more about internship
        and full-time opportunities at a wide range of companies."
        svg={<Lighthouse />}
      />
      <div className="domes">
        <img src={Domesmobile} className="domes-mobile" />
        <img src={Domesdesktop} className="domes-desktop" />
      </div>

      <div className="attending">
        <h2>Attending Companies</h2>
        <h3>Recruiting & Networking:</h3>
        <div className="companies">
          
          
          
          <a href="https://artofproblemsolving.com/" className="item" target='_blank' rel="noreferrer">
            <img src={Aops} />
          </a>
          <a href="https://www.conote.ai/" className="item" target='_blank' rel="noreferrer">
            <img src={Conote} />
          </a>
        </div>
        <h3>Networking Only:</h3>

        <div className="companies">
          <a href="https://www.apple.com/" className="item" target='_blank' rel="noreferrer">
            <img src={Apple} />
          </a>
          <a href="https://about.google/" className="item" target='_blank' rel="noreferrer">
            <img src={Google} />
          </a>
          <a href="https://www.illumina.com/" className="item" target='_blank' rel="noreferrer">
            <img src={Illumina} />
          </a>
          <a href="https://www.arup.com/" className="item" target='_blank' rel="noreferrer">
            <img src={Arup} style={{padding: '25px'}}/>
          </a>
        </div>
      </div>
      <Apply/>
    </main>
  );
};

export default FeaturedCompanies;
