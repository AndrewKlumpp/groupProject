import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EventForm = (props) => {
  const navigate = useNavigate()
  const [eventName, setEventName] = useState('')
  const [eventLocation, setEventLocation] = useState('')
  const [eventDate, setEventDate] = useState('')
  const [eventDescription, setEventDescription] = useState('')
  const [errors, setErrors] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    const newEvent = {
      eventName,
      eventLocation,
      eventDate,
      eventDescription
    }
    axios.post('http://localhost:8000/api/events/create', newEvent)
      .then((res) => {
        navigate('/events')
      })
      .catch((err) => {
        setErrors(err.response.data.errors)
      })
  }

  return (
    <div>
      <form className='w-50 mx-auto' onSubmit={submitHandler}>
        <div>
          <label className='form-label'>Event Name</label>
          <input
            className='form-control'
            type="text"
            onChange={(e) => setEventName(e.target.value)}
            value={eventName}
          />
          {
            errors.eventName ?
            <p className='text-danger'>{errors.eventName.message}</p> :
            null
          }
        </div>
        <div>
          <label className='form-label'>Event Location</label>
          <input
            className='form-control'
            type="text"
            onChange={(e) => setEventLocation(e.target.value)}
            value={eventLocation}
          />
          {
            errors.eventLocation ?
            <p className='text-danger'>{errors.eventLocation.message}</p> :
            null
          }
        </div>
        <div>
          <label className='form-label'>Event Date</label>
          <input
            className='form-control'
            type="date"
            onChange={(e) => setEventDate(e.target.value)}
            value={eventDate}
          />
          {
            errors.eventDate ?
            <p className='text-danger'>{errors.eventDate.message}</p> :
            null
          }
        </div>
        <div>
          <label className='form-label'>Event Description</label>
          <input
            className='form-control'
            type="text"
            onChange={(e) => setEventDescription(e.target.value)}
            value={eventDescription}
          />
          {
            errors.eventDescription ?
            <p className='text-danger'>{errors.eventDescription.message}</p> :
            null
          }
        </div>
        <br />
        <button className='btn btn-success'>Submit</button>
        <Link className='btn btn-primary m-2 col' to={'/events'}>Go Back</Link>
      </form>
    </div>
  )
}
export default EventForm
