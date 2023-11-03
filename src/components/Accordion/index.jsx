import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './styles.scss';

const Accordion = ({ data }) => {
  const [openSection, setOpenSection] = useState(null);

  const toggleAccordion = (index) => {
    if (openSection === index) {
      setOpenSection(null);
    } else {
      setOpenSection(index);
    }
  };

  const customHTML = (
    <>
      <p style={{'marginBottom': '1rem'}}>
        We highly recommend attending our Stride Prep GBM happening week 6!
        There, you'll gain insight on how to prepare your resume or your pitch.{' '}
      </p>

      <p style={{'marginBottom': '1rem'}}>
        But for starters, print out your resume in case recruiters want to take
        a deeper look at it. Create a 3 minute pitch to talk about who you are
        as a designer, what got you into design, and projects you've worked on
        in the past. There's no harm in treating this as a phone screening!
      </p>
      <p>Feel free to check out our <a href="https://docs.google.com/document/d/18pBI2_xM0AN4_Gdy3LuPqXXy9NISa8Yj3DeDRbeWT-E/" target="_blank" rel="noreferrer">preparation doc</a> for more details.</p>
    </>
  );

  return (
    <div className="accordion-container">
      {data.map((section, index) => (
        <div key={index} className="accordion">
          <div
            className="accordion-header"
            onClick={() => toggleAccordion(index)}
          >
            <span className="accordion-title">{section.title}</span>
            <span className={`icon ${openSection === index ? 'open' : ''}`}>
              ▼
            </span>
          </div>
          <CSSTransition
            in={openSection === index}
            timeout={300}
            classNames="accordion-content"
            unmountOnExit
          >
            <div className="accordion-content">
              {section.custom ? customHTML : <p>{section.content}</p>}
            </div>
          </CSSTransition>
          <div className="accordion-line"></div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
