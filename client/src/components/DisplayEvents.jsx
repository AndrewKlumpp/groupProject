import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

const DisplayEvents = (props) => {
  const [events, setEvents] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  useEffect(() => {
    axios.get('http://localhost:8000/api/events/get/events')
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const sortEvents = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    const sortedArray = [...events].sort((a, b) => {
      if (key === 'eventDate') {
        const dateA = new Date(a[key]);
        const dateB = new Date(b[key]);
        return direction === 'ascending' ? dateA - dateB : dateB - dateA;
      } else {
        return direction === 'ascending'
          ? a[key].localeCompare(b[key])
          : b[key].localeCompare(a[key]);
      }
    });

    setEvents(sortedArray);
    setSortConfig({ key, direction });
  };

  return (
    <div className="container">
      <table className="table table-striped table-dark border mt-3">
        <thead>
          <tr>
            <th onClick={() => sortEvents('eventName')} style={{ cursor: 'pointer' }}>
              Name {sortConfig.key === 'eventName' ? (sortConfig.direction === 'ascending' ? '▲' : '▼') : ''}
            </th>
            <th onClick={() => sortEvents('eventLocation')} style={{ cursor: 'pointer' }}>
              Location {sortConfig.key === 'eventLocation' ? (sortConfig.direction === 'ascending' ? '▲' : '▼') : ''}
            </th>
            <th onClick={() => sortEvents('eventTime')} style={{ cursor: 'pointer' }}>
              Time {sortConfig.key === 'eventTime' ? (sortConfig.direction === 'ascending' ? '▲' : '▼') : ''}
            </th>
            <th onClick={() => sortEvents('eventDate')} style={{ cursor: 'pointer' }}>
              Date {sortConfig.key === 'eventDate' ? (sortConfig.direction === 'ascending' ? '▲' : '▼') : ''}
            </th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => {
            const date = new Date(event.eventDate);
            const formattedDate = dayjs(date).format('MMMM D, YYYY');

            //Format time to 12 hour time
            const formattedTime = dayjs(`2000-01-01T${event.eventTime}`).format('hh:mm A');

            return (
              <tr key={event._id}>
                <td>{event.eventName}</td>
                <td>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.eventLocation)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {event.eventLocation}
                  </a>
                </td>
                <td>{formattedTime}</td>
                <td>{formattedDate}</td>
                <td>{event.eventDescription}</td>
                <td>
                  <Link className="btn btn-success" to={`/update/event/${event._id}`}>
                    Edit
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link className="btn btn-success m-2" to={`/create/event`}>Add an Event</Link>
    </div>
  );
};

export default DisplayEvents;
