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

import axios from "axios";


import HeaderSignUp from "../../Signup/HeaderSignup";

/* 
import LocationAutoComplete from '../Tools'; */



import Thumb from "../Tools/Thumb";

import { LOAD_CATEGORIES } from "../../../actions/events";

import { format } from 'date-fns';

console.log(format(new Date(), 'yyyy-dd-MM kk:mm:ss'))



const Test = () => {

    const Input = styled('input')({
        display: 'none',
    });
    let webApiUrl = 'http://localhost:8080/api/v1/events';

    let webApiUrlOnlineEvent = 'hhttp://localhost:8080/api/v1/events?type=online';

    let tokenStr = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MzkzODc0ODQsImV4cCI6MTYzOTQ3Mzg4NCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGdtYWlsLmNvbSJ9.m1WKw152sWiclYjALSrrnSH-8AS-NOBXpPg-kv4XI1LzNgHINqj84PKZh2NR_VcKXZmN8TAcbq7MhRcTzWw_r848r3Go0CQNjT7Y7JKVhEhqsyJPVurpVmA5jeng7FihB-Aim4TBXTa1dlkd2wZiVLITl3PKa4aE0RipzIJUVTXKvajPy7GsqJjQHQ658i8faVwcU4hb9YvGG5ZxOIY0XQSsKKX_iYAXfndcimojfaIM177ivL_2oQp8BzZkCjLGmq9uLbGqS6U043BryhDaqtt6ezyjNOzCwBDwg8LVxCY06obdGJfXsmgI68H5XKp_QCPHOT5Q2rtS6LrEk6VPeg';
    
    
      const dispatch = useDispatch();
    

      const categorieList = useSelector(
        (state) => state.categories.categorieList
      );
    
    
      useEffect(() => {
        dispatch({ type: LOAD_CATEGORIES });
      }, [dispatch]);


    const [responseFormValidateForm, setResponseValidateForm] = useState(false);

// TODO DIRE AU BACK, AJOUT NE FONCTIONNE PAS SUR INSOMNIA, DONC ICI AUSSI. LE ISONLINE

    const onSubmit = async (values) => {
        /* alert(JSON.stringify( values, null, 2)); */

        if (values.isOnline === '1')
         {
            alert(JSON.stringify( values.picture.name, null, 2));
            axios({
                headers: { "Authorization": `Bearer ${tokenStr}` },
                data: {
                    title : values.title, 
                    picture: values.picture.name,
                    description: values.description,
                    maxMembers:values.maxMembers ,
                    isOnline: values.picked,
                    category: values.category,
                    date: values.date,
                    address: values.place,
                    author: values.author,                               
                  },
                url: webApiUrlOnlineEvent,
                method: 'post',
            })
                .then(function (reponse) {
                    setResponseValidateForm(true);
                    console.log(reponse);
                })
                .catch(function (erreur) {
    
                    window.alert("Une erreur s'est produite, veuillez réessayer");              
                    console.log(erreur);
                });
        } else {
            alert(JSON.stringify( values, null, 2));
            axios({
                headers: { "Authorization": `Bearer ${tokenStr}` },
                data: {
                    title : values.title, 
                    description: values.description,
                    date: values.date,
                    category: values.category,
                    maxMembers:values.maxMembers,
                    picture: values.picture.name,
                    author: values.author,
                    address: values.address,
                    city: values.city,
                    country: values.country,
                    zipcode: values.zipcode,
                },
                url: webApiUrl,
                method: 'post',    
            })
                .then(function (reponse) {
                    setResponseValidateForm(true);
                    console.log(reponse);
                })
                .catch(function (erreur) {
    
                    window.alert("Une erreur s'est produite, veuillez réessayer");              
                    console.log(erreur);
                });
        }; 

        


    };

    const validationSchema = yup.object({
        title: yup
            .string('Entré le nom de l\'évènement')
            .min(3, 'Un nom d\'évènement doit contenir 3 caractères minimum')
            .required('Le nom de l\'évènement doit être rempli'),
        city: yup
            .string('Entré un lieu valide')
            .min(3, 'Un lieu doit contenir au moins 3 lettres')
            .required('Un lieu est requis'),
        description: yup
            .string('Entré une description')
            .min(50, 'Une description doit contenir 20 caractères au minimum')
            .required('Une description est requise'),
        maxMembers: yup
            .number('Entré un nombre maximum de participant ')
            .min(2, 'Un évènement doit avoir un moins 2 participant')
            .required('Le nombre maximum de participant est requis'),
    });



    const formik = useFormik({
        initialValues: {
            title: '',           
            description: '',
            maxMembers: '',
            isOnline: '', 
            category: '',
            date: format(new Date(), 'yyyy/MM/dd kk:mm:ss'),
            /* cityid: { name: "", id: null, state: "" }, // A CONSERVER POUR AUTOCOMPLETION  */
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





    if (responseFormValidateForm) {
        return <Navigate to="/" />
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
                                format= {format(new Date(), 'yyyy/MM/dd kk:mm:ss')}
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


export default Test;