import React, { useState } from 'react';
import Header from '../components/Header';
import AboutPage from '../components/AboutPage';

const About = (props) => {
  return (
    <div>
      <Header title={'About'} />
      <AboutPage />
    </div>
  )
}
export default About;
