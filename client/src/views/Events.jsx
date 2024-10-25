import React, { useState } from 'react';
import Header from '../components/Header';
import DisplayEvents from '../components/DisplayEvents';

const Events = (props) => {
  return (
    <div>
      <Header title={'Events'} />
      <DisplayEvents/>
    </div>
  )
}
export default Events;
