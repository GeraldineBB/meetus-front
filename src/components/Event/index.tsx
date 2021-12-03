import React from 'react';
import EventForm from './EventForm';
import Button from '@mui/material/Button';
import Header from '../../components/Header';
const Event = () => {

    return (

        <div>
            <Header />
            <EventForm />
            
            {/* LE BUTTON ICI EST PR LEXEMPLE, IL IRA EN SUBMIT DANS LE EVENT FORM, A CAUSE DE TYPESCRIPT NE PEUT PAS ENCORE LE TESTER */}
            <Button sx={{ backgroundColor: '#F36B7F', '&:hover': { backgroundColor: '#F8CF61' } }}  className='buttom' variant="contained">Créer mon évènement</Button>

        </div>

    );
};

export default Event;