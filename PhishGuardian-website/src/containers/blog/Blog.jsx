import React, { useState } from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';
import Feature2 from '../../components/feature2/Feature2';

function Blog(){
  const [emailInput, setEmailInput] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setEmailInput(e.target.value);
  };

  const handleCheckEmail = () => {
    if (emailInput === 'abc@gmail.com') {
      setMessage('The data is breached!');
    } else {
      setMessage('Data is secure!');
    }
  };

  return(
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <center><h1 className="gradient__text">';--have i been pwned?</h1></center>
    </div>
    <div className="centered-paragraph">
      <p>Check if your email address is in a data breach</p>
    </div>
    <div className="header-content__input">
        <input type="email" placeholder="Email Address" value={emailInput}
        onChange={handleInputChange} />
        <button type="button" onClick={handleCheckEmail}>Pwned?</button>
      </div>
      <div className="centered-paragraph">
      <p>{message}</p>
    </div>
      
    <div className="gpt3__whatgpt3-container" style={{ paddingRight: '0px', marginRight: '20px'  }}>
      <Feature2 title="714" text="pwned websites" />
      <Feature2 title="12,739,804,205" text="pwned accounts" />
      <Feature2 title="115,762" text="pastes" />
      <Feature2 title="228,879,620" text="paste accounts" />
    </div>
    <div className="centered-paragraph">
    <p className='custom'>**The data is sourced from <a href="https://haveibeenpwned.com" target="_blank"><u>Have I Been Pwned</u></a> public API.</p>
    </div>
  </div>
  
  
);}

export default Blog;
