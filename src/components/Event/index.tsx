import React from 'react';
import EventForm from './EventForm';
import Button from '@mui/material/Button';
import Header from '../../components/Header';
import './style.scss';
const Event = () => {

    return (

        <div>
            <Header />
            <div className='event'>
            <EventForm />
            </div>
        </div>

    );
};

export default Event;