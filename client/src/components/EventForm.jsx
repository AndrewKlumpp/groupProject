import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import dayjs from 'dayjs';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EventForm = (props) => {
  const navigate = useNavigate()
  const [eventName, setEventName] = useState('')
  const [eventLocation, setEventLocation] = useState('')
  const [eventTime, setEventTime] = useState('')
  const [eventDate, setEventDate] = useState(new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }))
  const [eventDescription, setEventDescription] = useState('')
  const [errors, setErrors] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    const newEvent = {
      eventName,
      eventLocation,
      eventTime,
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

  const handleDateChange = (date) => {
    setEventDate(date);
  };

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
          <label className='form-label'>Event Time</label>
          <input
            className='form-control'
            type="text"
            onChange={(e) => setEventTime(e.target.value)}
            value={eventTime}
          />
          {
            errors.eventTime ?
            <p className='text-danger'>{errors.eventTime.message}</p> :
            null
          }
        </div>
        <div>
          <label className='form-label'>Event Date</label>
          <DatePicker
            className='form-control'
            id='date-picker'
            selected={eventDate}
            onChange={handleDateChange}
            dateFormat="yyyy/MM/dd"
          />
          {
            errors.eventDate ?
            <p className='text-danger'>{errors.eventDate.message}</p> :
            null
          }
        </div>
        <div>
          <label className='form-label'>Event Description</label>
          <textarea
            className='form-control'
            type="text"
            onChange={(e) => setEventDescription(e.target.value)}
            value={eventDescription}
            rows={4}
            cols={40}
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
