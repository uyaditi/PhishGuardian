import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';
import hacker from '../../assets/hacker.png';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to secure your browsing experience?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={hacker}/>
        <p>All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Init0</p>
        <p>085-132567</p>
        <p>init0@gmail.comt</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 Phishing Gurdian. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
