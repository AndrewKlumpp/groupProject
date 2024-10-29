import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomeEvents = (props) => {
  const [events, setEvents] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/api/events/get/events')
      .then((res) => {
        console.log(res)
        setEvents(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div className='container'>
        <div className='event-cluster'>
          {
            events.map((event) => (
              <div key={event._id}>
                <h3>{event.eventName}</h3>
                <p>{event.eventLocation}</p>
                <p>{event.eventDate}</p>
                <p>{event.eventDescription}</p>
              </div>
            ))
          }
          </div>
    </div>
  )
}
export default HomeEvents;
