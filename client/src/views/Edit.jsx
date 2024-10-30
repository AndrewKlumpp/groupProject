import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import dayjs from 'dayjs';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Edit = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [eventName, setEventName] = useState('')
  const [eventLocation, setEventLocation] = useState('')
  const [eventDate, setEventDate] = useState('')
  const [eventDescription, setEventDescription] = useState('')
  const [errors, setErrors] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:8000/api/events/get/event/${id}`)
      .then((res) => {
        console.log(res)
        setEventName(res.data.eventName)
        setEventLocation(res.data.eventLocation)
        setEventDate(res.data.eventDate)
        setEventDescription(res.data.eventDescription)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const submitHandler = (e) => {
    e.preventDefault();
    const updatedEvent = {
      eventName,
      eventLocation,
      eventDate,
      eventDescription
    }
    axios.put(`http://localhost:8000/api/events/update/event/${id}`, updatedEvent)
      .then((res) => {
        navigate(`/events`)
      })
      .catch((err) => {
        setErrors(err.response.data.errors)
      })
  }

  const deleteHandler = () => {
    axios.delete(`http://localhost:8000/api/events/delete/event/${id}`)
    .then((res) => {
      navigate('/events')
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const handleDateChange = (date) => {
    setEventDate(date);
  };

  return (
    <div>
      <Header title={'Update Event'} />
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
        <button onClick={deleteHandler} className='btn btn-danger delete-button'>Delete Event</button>
      </form>
    </div>
  )
}
export default Edit
