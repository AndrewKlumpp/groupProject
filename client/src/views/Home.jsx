import React, { useState } from 'react';
import Header from '../components/Header';
import HomeContent from '../components/HomeContent';

const Home = (props) => {
  return (
    <div>
      <Header title={'Welcome to the Nook!'} />
      <HomeContent />
    </div>
  )
}
export default Home;
