import './styles.scss';
import React from 'react';
import FerrisWheel from '../../components/FerrisWheel';
import Domesmobile from '../../assets/domesmobile.svg';
import Domesdesktop from '../../assets/domesdesktop.svg';

import Iconone from '../../assets/icons/one.svg';
import Icontwo from '../../assets/icons/two.svg';
import Iconthree from '../../assets/icons/three.svg';

import Accordion from '../../components/Accordion';
import AccordionData from '../../faq.json';


const About = () => {
  return (
    <main className="about-cont">
      <div className='about'>
        <div className='text'>
          <h2 className='header'>ABOUT STRIDE</h2>
          <p className='description'>Stride is a uniquely design-forward career fair aiming to connect aspiring designers with company representatives. Students are encouraged to showcase their work and experience, so we recommend that you bring a physical copy of your resume!</p>
        </div>
        <div className='ferris-wheel'>
          <FerrisWheel />
        </div>
      </div>
      <div className='domes'>
        <img src={Domesmobile} className='domes-mobile'/>
        <img src={Domesdesktop} className='domes-desktop'/>
      </div>
      <div className='opportunities'>
        <h4 className='oppor-title'>Opportunities at Stride</h4>
        <div className='items'>
          <div className='item'>
            <img src={Iconone}/>
            <h3>Company Info Sessions</h3>

          </div>
          <div className='item'>
            <img src={Icontwo}/>
            <h3>Resume Reviews</h3>
          </div>
          <div className='item'>
            <img src={Iconthree}/>
            <h3>One on Ones</h3>
          </div>
        </div>


      </div>
      <div className='faq'>
        <h3 className='faq-title'>
          FREQUENTLY ASKED QUESTIONS
        </h3>
        <Accordion data={AccordionData} />
         
      </div>
    </main>
  );
}

export default About;