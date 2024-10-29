import React, { useState } from 'react';
import Header from '../components/Header';
import HomeContent from '../components/HomeContent';
import HomeEvents from '../components/HomeEvents';

const Home = (props) => {
  return (
    <div>
      <Header title={'Welcome to the Nook!'} />
      <HomeContent />
      <HomeEvents />
    </div>
  )
}
export default Home;
