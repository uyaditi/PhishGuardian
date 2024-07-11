import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Phishing?" text='Phishing is a malicious online activity where cybercriminals impersonate legitimate entities to deceive individuals into revealing sensitive information. The term "phishing" is a play on "fishing" because attackers "fish" for personal information.'/>
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Don't take the bait, educate! Learn about phishing and stay off the hook.</h1>
      <p className='padding_right'>Delve into the World of Phishing: <br/>Explore, Learn, Stay Secure</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Common Phishing Methods" text="Phishing can take the form of fake emails, copycat websites, malicious attachments, or social manipulation tactics." />
      <Feature title="Warning Signs" text="Watch out for unsolicited requests, odd email addresses, generic messages, and anything pressuring you to act fast." />
      <Feature title="Preventive Measures" text="Protect yourself by verifying sources, avoiding suspicious links and downloads, and using strong, unique passwords with two-factor authentication." />
      <Feature title="Reporting and Resources" text="Report phishing incidents to authorities and find help from government agencies and anti-phishing tools." />
    </div>
  </div>
);

export default WhatGPT3;
