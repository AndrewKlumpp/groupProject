import React, { useState } from 'react';
import Header from '../components/Header';
import EventForm from '../components/EventForm';
import { Link } from 'react-router-dom';

const AddEvent = () => {
  return (
    <div>
      <Header title={'Add an Event'} />
      <EventForm />
    </div>
  )
}
export default AddEvent;
