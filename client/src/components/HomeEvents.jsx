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
      <div className='event-cluster d-flex justify-content-center gap-4'>
        {
          events.map((event) => {
            // Create a Date object from the event date string
            const date = new Date(event.eventDate);

            // Format the date to "day/month/year"
            const formattedDate = date.toLocaleDateString('en-US', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            });

            return (
              <div key={event._id} className="single-event card text-center">
                <h3>{event.eventName}</h3>
                <p>{event.eventLocation}</p>
                <p>{formattedDate}</p>
                <p>{event.eventDescription}</p>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}
export default HomeEvents;
