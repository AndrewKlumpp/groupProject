import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

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
      <div className='event-cluster d-flex justify-content-center'>
        {
          events.map((event) => {
            // Create a Date object from the event date string
            const date = new Date(event.eventDate);

            // Format the date to "day/month/year"
            const formattedDate = dayjs(date).format('MMMM D, YYYY');

            //Format time to 12 hour time
            const formattedTime = dayjs(`2000-01-01T${event.eventTime}`).format('hh:mm A');

            return (
              <div key={event._id} className="single-event card text-center">
                <h3>{event.eventName}</h3>
                <p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.eventLocation)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {event.eventLocation}
                  </a>
                </p>
                <p>{formattedTime} on {formattedDate}</p>
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
