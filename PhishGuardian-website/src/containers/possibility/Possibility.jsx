import React from 'react';
import possibilityImage from '../../assets/Secure data-pana.png';
import Feature from '../../components/feature/Feature';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className='adjust'>
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility"/>
    </div>
    <a href="https://storyset.com/data" className='custom'><u>Data illustrations by Storyset</u></a>
    </div>
    <div className='adjust'>
    <div className="gpt3__possibility-content">
      <h4>Get Started</h4>
      <h1 className="gradient__text">Your Guide to Using PhishGuardian's Browser Extension</h1>
      <p>PhishGuardian browser extension is your trusty companion for secure online browsing. Here's how to make the most of it:</p>
      
      {/* <h4>With PhishGuardian browser extension, your online security is just a click away.</h4> */}
    </div>
    <div>
      <Feature title='Install' text='Install the PhishGuardian browser extension'/>
      <Feature title='Browse' text='As you explore the internet, the extension will silently capture URLs you visit.'/>
      <Feature title='Assess' text='Our advanced Machine Learning models and rule-based algorithms will evaluate websites for trustworthiness.'/>
      <Feature title='Alert' text="If a website raises concerns, you'll receive real-time pop-up notifications, helping you stay vigilant."/>
      <Feature title='Inspect' text='For those seeking website details, our extension provides comprehensive information, including WHOIS data, personal details, and technical specifications.'/>
      </div>
      </div>
  </div>
);

export default Possibility;
