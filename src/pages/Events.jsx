import React, { useEffect } from 'react';
import './Events.scss'
import { useDispatch, useSelector } from 'react-redux';
import { MdEvent } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { fetchProfiles } from '../context/profileSlice';
import { createEvent, deleteEvent, fetchAllEvents } from '../context/eventSlice';
import { eventModalOn } from '../context/stateSlice';
import { FaTrash } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const Events = () => {
    const dispatch = useDispatch()
    const { user,profile } = useSelector((state) => state.userSlice)
    const { events } = useSelector((state) => state.eventSlice)
    const myEvents = events?.filter((event) => event?.author?._id === profile?._id)
    useEffect(() => {
        // dispatch(fetchProfiles())
        dispatch(fetchAllEvents())

    }, [])
    console.log(events,profile)
    return (

        <div className='events'>

            <div className="head">
                <h2>Events</h2>
                <button onClick={() => dispatch(eventModalOn())}>Create an event</button>
            </div>
            <ul>
                <h4>Your events</h4>
                {myEvents.map((event) => (
                    <li key={event._id}>
                        <img src={event?.selectedFile} alt="" />
                        <div className="details">
                            <p>{event?.name} | Organizer</p>
                            {/* <p className='desc'>{event?.type}</p> */}
                            <p className='desc'>Date- {event?.start} - {event?.end}</p>
                            {/* <p className='desc'>{event?.end}</p> */}
                            <p className='desc'>By- {profile?.name}</p>
                            {/* <hr /> */}
                            <p className='desc'>About- {event?.description}</p>
                        </div>
                        <button onClick={() => dispatch(deleteEvent(event._id))}><RxCross1 size={17} /></button>

                    </li>

                ))}
            </ul>

        </div>

    )
}

export default Events