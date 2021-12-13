import React, { useEffect, useState } from "react";
import './style.scss';

import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import { MenuItem } from '@mui/material';
import { Select } from '@mui/material';
import { FormControl } from '@mui/material';
import { FormLabel } from '@mui/material';
import { RadioGroup } from '@mui/material';
import { Radio } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

import { NavLink, Redirect, Navigate } from "react-router-dom";

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

import { useFormik } from 'formik';
import * as yup from 'yup';

import axios from "axios";


import HeaderSignUp from "../../Signup/HeaderSignup";

import LocationAutoComplete from '../Tools';



import Thumb from "../Tools/Thumb";

import { LOAD_INFO_FOR_PAGE_EVENT, LOAD_CATEGORIES, editEvent, setNewEvent, setNewEventOnline} from "../../../actions/events";




const EventEdit = ({eventId}) => {

    const Input = styled('input')({
        display: 'none',
    });

    const eventInfoPage = useSelector(
    (state) => state.events.eventInfoPage);

    const loading = useSelector(
    (state) => state.events.loading);     

    const dispatch = useDispatch();

    const categorieList = useSelector(
    (state) => state.categories.categorieList
    );


    useEffect(() => {
    dispatch({ type: LOAD_CATEGORIES });
    dispatch({ type: LOAD_INFO_FOR_PAGE_EVENT, eventId: eventId });
    console.log(eventInfoPage);     
    }, [dispatch, eventId]);


    const [responseFormValidateForm, setResponseValidateForm] = useState(false);


    const onSubmit = async (values) => {
        /* alert(JSON.stringify( values, null, 2)); */

        // if (values.isOnline === '1')
        // {
        //     alert(JSON.stringify( values.title, null, 2));
        //     dispatch(setNewEventOnline(values));
        // } else {
        //     alert(JSON.stringify( values, null, 2));
        //     dispatch(setNewEvent(values));
        // }; 
        
        dispatch (editEvent(values, eventId)); 
        console.log('log edition form', values); 
    };

    const validationSchema = yup.object({
        title: yup
            .string('Entrer le nom de l\'évènement')
            .min(3, 'Un nom d\'évènement doit contenir 3 caractères minimum')
            .required('Le nom de l\'évènement doit être rempli'),
        city: yup
            .string('Entrer un lieu valide')
            .min(3, 'Un lieu doit contenir au moins 3 lettres')
            .required('Un lieu est requis'),
        description: yup
            .string('Entrer une description')
            .min(20, 'Une description doit contenir 20 caractères au minimum')
            .required('Une description est requise'),
        maxMembers: yup
            .number('Entrer un nombre maximum de participant ')
            .min(2, 'Un évènement doit avoir un moins 2 participant')
            .required('Le nombre maximum de participant est requis'),
        picture : yup.object().shape({
            file: yup.mixed().required(),
          })
        //TODO Date VALIDATION

    });

    // const myForm = () => {
        
    // }


    const formik = useFormik({

        initialValues: {
            title: '',
            description: '',
            maxMembers: '',
            isOnline: '', 
            category: '',
            date: new Date(),
            /* cityid: { name: "", id: null, state: "" }, // A CONSERVER POUR AUTOCOMPLETION  */
            place: '',
            picture: '',
            author: 2,
            city:'',
            zipcode:'38000',
            country:'FRANCE',

        },
         /* validationSchema: validationSchema, */   
        //  enableReinitialize: true,
         onSubmit,
    });

    if (responseFormValidateForm) {
        return <Navigate to="/" />
    }

    if (loading) {
        return <div>coucou</div>;
    }


    return (

        <div>
            <HeaderSignUp />
            <h2> Modifier votre évènement </h2>


            <form onSubmit={formik.handleSubmit} >

                <div className='event__form__if'>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Type d'évènement</FormLabel>
                        <RadioGroup
                            row aria-label="type"
                        >
                            <FormControlLabel value="1"
                                name="isOnline"
                                control={<Radio />}
                                onChange={formik.handleChange}
                                label="En ligne" />
                            <FormControlLabel value="0"
                                name="isOnline"
                                control={<Radio />}
                                onChange={formik.handleChange}
                                label="En présentiel" />
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className='event__form__name'>
                    <TextField fullWidth label="Nom de l'évènement" className="eventForm"
                        id="title"
                        name="title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        error={formik.touched.title && Boolean(formik.errors.title)}
                        helperText={formik.touched.title && formik.errors.title} />

                </div>

                <div className='event__form__date'>
                    <FormControl fullWidth>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DateTimePicker
                                label="Date&Time picker"
                                value={formik.values.date}
                                onChange={(newDate) => {
                                    formik.setFieldValue("date", newDate);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </FormControl>
                </div>

                <div className='event__form__place'>
                    <LocationAutoComplete />

                    <TextField fullWidth label="Lieu" className="eventForm"
                        id="city"
                        name="city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        error={formik.touched.city && Boolean(formik.errors.city)}
                        helperText={formik.touched.city && formik.errors.city} />
                </div>

                <div className='event__form__select'>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Choix de catégorie</InputLabel>
                        <Select
                            labelId="event_form_single_select_label"
                            id="event_form_single_select"
                            label="category"
                            name="category"                           
                            type="select"
                            value={formik.values.category}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} >

                            {categorieList.map((category) => (
                                
                            <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>   
                               
                       ))}   
                        </Select>
                    </FormControl>
                </div>

                <div className='event__form__photo'>
                    <FormControl fullWidth>
                        <label htmlFor="contained-button-file">
                            <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={(event) => {
                                formik.setFieldValue("picture", event.currentTarget.files[0]);
                            }} />
                            <Button
                                sx={{ backgroundColor: '#9FBFFF', '&:hover': { backgroundColor: '#82B5A5' } }}
                                fullWidth variant="contained"
                                component="span">
                                Téléchargez votre image de couverture d'évènement
                            </Button>
                            
                        </label>
                    </FormControl>
                </div>
                <div className='event__form__photo'>
                    <Thumb file={formik.values.picture} />
                </div>
                <div className='event__form__description'>
                    <TextField fullWidth label="Votre description"
                        className="eventForm"
                        id="description"
                        name="description"
                        type="description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        error={formik.touched.description && Boolean(formik.errors.description)}
                        helperText={formik.touched.description && formik.errors.description} />
                </div>

                <div className='event__form__number'>
                    <TextField fullWidth label="Nombre maximum de participant"
                        className="eventForm"
                        id="maxMembers"
                        name="maxMembers"
                        value={formik.values.maxMembers}
                        onChange={formik.handleChange}
                        error={formik.touched.maxMembers && Boolean(formik.errors.maxMembers)}
                        helperText={formik.touched.maxMembers && formik.errors.maxMembers} />
                </div>
                <div className='event__form__buttom'>
                    <FormControl fullWidth>
                        <Button
                            sx={{ backgroundColor: '#F36B7F', '&:hover': { backgroundColor: '#F8CF61' } }}
                            variant="contained"
                            type="submit">
                            Modifier mon évènement
                        </Button>
                    </FormControl>
                </div>

            </form>

        </div>


    );
};


export default EventEdit;