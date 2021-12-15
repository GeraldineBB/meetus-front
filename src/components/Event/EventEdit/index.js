import React, { useEffect } from "react";
import './style.scss';

import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import { MenuItem } from '@mui/material';
import { Select } from '@mui/material';
import { FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

import { NavLink, Redirect, Navigate } from "react-router-dom";

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { format } from 'date-fns';

import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

import { Formik, Form, ErrorMessage } from "formik";


import Thumb from "../Tools/Thumb";

import { LOAD_INFO_FOR_PAGE_EVENT, LOAD_CATEGORIES, editEvent} from "../../../actions/events";


export default function EventEdit ({eventId}) {

    const Input = styled('input')({
        display: 'none',
    });

    const eventInfoPage = useSelector(
    (state) => state.events.eventInfoPage);

    const categorieList = useSelector(
    (state) => state.categories.categorieList);

    const edition = useSelector(
    (state) => state.events.edition); 

    const dispatch = useDispatch();

    useEffect(() => {
    dispatch({ type: LOAD_CATEGORIES });
    dispatch({ type: LOAD_INFO_FOR_PAGE_EVENT, eventId: eventId });
    console.log(eventInfoPage);  
   
    }, [dispatch, eventId]);

    if(!edition){
        return <Navigate to="/edition-done" />
    }

    return (

    <div>

        <Formik

            initialValues={
                {                 
                    title: '',
                    date: format(new Date(), 'yyyy-MM-dd kk:mm:ss'),
                    city: '',
                    category: '',
                    picture: '',
                    description: '',
                    maxMembers: '',

                }
                
            } 
            validate={(values) => {

                const errors = {};
                if (!values.title) {
                    errors.title = "Nom de l'évènement requis";
                } else if (!values.date){
                    errors.date = "Date requise"; 
                } else if (!values.city){
                    errors.city = "Adresse requise";
                } else if (!values.category){
                    errors.category = "Categorie requise";
                } else if (!values.description){
                    errors.description = "Description requise"; 
                } else if (!values.maxMembers){
                    errors.maxMembers= "Nombre de participants requis"; 
                } else if (
                    values.title.length<10
                ) {
                    errors.title = "Le titre de l'évènement doit contenir au moins 10 caractères";
                } else if (
                    values.description.length<50
                ) {
                    errors.title = "La description de l'évènement doit contenir au moins 50 caractères";
                } 

                return errors;
            }
            }
            onSubmit={(values) => {
                console.log(values); 
                dispatch (editEvent(values, eventId)); 
                
            }}
            >
            {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue, 
            isSubmitting,
            }) => (

                <div className="editEvent"> 
                    <h2>Modifier mon évènement</h2>
                    <Form onSubmit={handleSubmit}>

                    <div className='event__form__name'>
                    <TextField fullWidth label="Nom de l'évènement" 
                        className="eventForm"
                        id="title"
                        name="title"
                        value={values.title}
                        onChange={handleChange}
                        error={touched.title && Boolean(errors.title)}
                        helperText={touched.title && errors.title} />
                    </div>

                    <div className='event__form__date'>
                    <FormControl fullWidth>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DateTimePicker
                                label="Date&Time picker"
                                value={values.date}
                                onChange={(newDate) => {
                                    setFieldValue("date", format(newDate, 'yyyy-MM-dd kk:mm:ss')); 
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </FormControl>
                    </div>


                    <div className='event__form__place'>

                    <TextField fullWidth label="Lieu" className="eventForm"
                        id="city"
                        name="city"
                        value={values.city}
                        onChange={handleChange}
                        error={touched.city && Boolean(errors.city)}
                        helperText={touched.city && errors.city} />
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
                            value={values.category}
                            onChange={handleChange}
                            onBlur={handleBlur} >

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
                                setFieldValue("picture", event.currentTarget.files[0]);
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
                        <Thumb file={values.picture} />
                    </div>

                    <div className='event__form__description'>
                    <TextField fullWidth label="Votre description"
                        className="eventForm"
                        id="description"
                        name="description"
                        type="description"
                        value={values.description}
                        onChange={handleChange}
                        error={touched.description && Boolean(errors.description)}
                        helperText={touched.description && errors.description} />
                    </div>

                    <div className='event__form__number'>
                    <TextField fullWidth label="Nombre maximum de participant"
                        className="eventForm"
                        id="maxMembers"
                        name="maxMembers"
                        value={values.maxMembers}
                        onChange={handleChange}
                        error={touched.maxMembers && Boolean(errors.maxMembers)}
                        helperText={touched.maxMembers && errors.maxMembers} />
                    </div>

                    <div className='event__form__buttom'>
                    <FormControl fullWidth>
                        <Button
                            sx={{ backgroundColor: '#F36B7F', '&:hover': { backgroundColor: '#F8CF61' } }}
                            variant="contained"
                            type="submit"
                            // disabled={isSubmitting}
                            >
                            Modifier mon évènement
                        </Button>
                    </FormControl>
                    </div>

                    </Form>

                </div>


            )}

            </Formik>


    </div>


    )


    
};


