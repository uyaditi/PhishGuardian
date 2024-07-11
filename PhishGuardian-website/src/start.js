import React from 'react';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header, Details } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

const Start = () =>(
    <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <WhatGPT3 />
    <Features />
    <Possibility />
    {/* <CTA /> */}
    <Blog />
    <Footer />
  </div>
);

export default Start;