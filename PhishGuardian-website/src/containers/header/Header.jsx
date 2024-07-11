import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import Phishing from '../../assets/Phishing.png';
import ei from '../../assets/ei.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Fortify & Elevate Your Online Safety with PhishGuardian</h1>
      <p>PhishGuardian combines user-friendly image recognition for easy front-end assessment with a powerful machine learning model for swift back-end predictions. This tandem approach guarantees robust protection against phishing threats without compromising on usability. Elevate your online security effortlessly with PhishGuard.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Check For Phishing" />
        <button type="button" onClick=''>Inspect</button>
      </div>

    
    </div>

    <div className="gpt3__header-image">
      <img src={ei} />
    </div>
  </div>
);

export default Header;
