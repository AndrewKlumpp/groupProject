import React, { useState } from 'react';
import Header from '../components/Header';
import HomeContent from '../components/HomeContent';
import HomeEvents from '../components/HomeEvents';

const Home = (props) => {
  const {user} = props
  console.log({user})
  return (
    <div>
      <Header title={user ? `Welcome, ${user.userName}!` : 'Welcome to the Nook!'} />
      <HomeContent />
      <HomeEvents />
    </div>
  )
}
export default Home;
