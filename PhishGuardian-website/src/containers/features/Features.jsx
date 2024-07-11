import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'User-Friendly Plugin',
    text: 'Install our browser extension for instant access to robust cybersecurity features.',
  },
  {
    title: 'Real-Time Website Analysis',
    text: "Our extension checks URLs using advanced Machine Learning and rule-based algorithms. You receive instant alerts if a threat is detected.",
  },
  {
    title: 'Comprehensive Insights',
    text: "Get in-depth site info, including WHOIS data and technical specs.",
  },
  {
    title: 'Learning Hub',
    text: 'Access our platform to learn about website protocols, password security, and data breach protection.',
  },
  {
    title: 'Data Breach Monitoring',
    text: "We integrate with 'Have I Been Pwned' to check if your info has been compromised. Stay informed and secure.",
  },
  {
    title: 'Dedicated Web Portal',
    text: "Investigate URLs further on our portal with AI-driven rule base analysis and extensive insights.",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">We are your vigilant shield in cyberspace, harnessing AI/ML to unveil phishing domains among the web's newest arrivals.</h1>
      <p>Unlock the Future: Experience Innovation at Your Fingertips.</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
