import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DisplayEvents = (props) => {
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
      <table className='table table-striped table-dark border mt-3'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Date</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            events.map((event) => (
              <tr key={event._id}>
                <td>{event.eventName}</td>
                <td>{event.eventLocation}</td>
                <td>{event.eventDate}</td>
                <td>{event.eventDescription}</td>
                <td><Link className='btn btn-success' to={`/update/event/${event._id}`}>Edit</Link></td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <Link className='btn btn-success m-2' to={`/create/event`}>Add an Event</Link>
    </div>
  )
}
export default DisplayEvents;