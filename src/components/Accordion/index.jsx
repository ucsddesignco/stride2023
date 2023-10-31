import React, { useState } from 'react';
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

  return (
    <div className="accordion-container">
      {data.map((section, index) => (
        <div key={index} className="accordion">
          <div className="accordion-header" onClick={() => toggleAccordion(index)}>
            <span className="accordion-title">{section.title}</span>
            <span className={`icon ${openSection === index ? 'open' : ''}`}>▼</span>
          </div>
          <CSSTransition
            in={openSection === index}
            timeout={300}
            classNames="accordion-content"
            unmountOnExit
          >
            <div className="accordion-content">
              <p>{section.content}</p>
            </div>
          
          </CSSTransition>
          <div className="accordion-line"></div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
