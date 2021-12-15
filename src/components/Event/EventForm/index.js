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

import { Navigate } from "react-router-dom";

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

import { useFormik } from 'formik';
import * as yup from 'yup';

import HeaderSignUp from "../../Signup/HeaderSignup";

/* 
import LocationAutoComplete from '../Tools'; */



import Thumb from "../Tools/Thumb";

import { LOAD_CATEGORIES } from "../../../actions/events";

import { format } from 'date-fns';

import { setNewEvent, setNewEventOnline } from "../../../actions/events";

console.log(format(new Date(), 'yyyy-dd-MM kk:mm:ss'))

const EventForm = () => {

    const Input = styled('input')({
        display: 'none',
    });
    
      const dispatch = useDispatch();
    
      const categorieList = useSelector(
        (state) => state.categories.categorieList
      );
    
      useEffect(() => {
        dispatch({ type: LOAD_CATEGORIES });
      }, [dispatch]);


    const [responseFormValidateForm, setResponseValidateForm] = useState(false);


    const onSubmit = async (values) => {
        

        if (values.isOnline === '1')
         {           
            dispatch(setNewEventOnline(values));
            setResponseValidateForm(true); 
            console.log(values);
         
        } else {
            dispatch(setNewEvent(values));
            setResponseValidateForm(true); 
            console.log(values);
        }; 
    };

    const validationSchema = yup.object({
        title: yup
            .string('Entré le nom de l\'évènement')
            .min(10, 'Un nom d\'évènement doit contenir 3 caractères minimum')
            .required('Le nom de l\'évènement doit être rempli'),
        city: yup
            .string('Entré un lieu valide')
            .min(3, 'Un lieu doit contenir au moins 3 lettres')
            .required('Un lieu est requis'),
        description: yup
            .string('Entré une description')
            .min(50, 'Une description doit contenir 50 caractères au minimum')
            .required('Une description est requise'),
        maxMembers: yup
            .number('Entré un nombre maximum de participant ')
            .min(2, 'Un évènement doit avoir un moins 2 participant')
            .required('Le nombre maximum de participant est requis'),
    });

    const today = new Date();

    const formik = useFormik({
        initialValues: {
            title: '',           
            description: '',
            maxMembers: '',
            isOnline: '', 
            category: '',
            date: new Date(new Date().setDate(today.getDate() + 1)),
            address: 'ODOGoogleAPI',
            picture: '',
            author: '3',
            city:'',
            zipcode:'38000',
            country:'FRANCE',

        },
          validationSchema: validationSchema,  
        onSubmit,
    });



/* 
  console.log("Error: ", formik.errors);  */


    if (responseFormValidateForm) {
        return <Navigate to="/event-creation-done" />
    }
    return (

        <div>
            <HeaderSignUp />
            <h2> Créer votre évènement </h2>


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
                                format= {format(new Date(), 'yyyyy-MM-dd kk:mm:ss')}
                                onChange={(newDate) => {
                                    formik.setFieldValue("date", format(newDate, 'yyyy-MM-dd kk:mm:ss'));
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />{/* format(new Date(), 'yyyy/MM/dd kk:mm:ss') */}
                        </LocalizationProvider>
                    </FormControl>
                </div>

                <div className='event__form__place'>
                    {/* <LocationAutoComplete /> */} {/* //TODO RECUP DATA AUTOCOMPLETION GOOGLE */}

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
                            Créer mon évènement
                        </Button>
                    </FormControl>
                </div>

            </form>

        </div>

    );
};


export default EventForm;