import React, { useEffect } from "react";
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
import { Input } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

import { useFormik } from 'formik';
import * as yup from 'yup';

import axios from "axios";


import { LOAD_CATEGORIES } from "../../../actions/events";



const EventEdit = () => {

    const Input = styled('input')({
        display: 'none',
    });

    
    const categorieList = useSelector(
        (state) => state.categories.categorieList
      );
    
      const dispatch = useDispatch();
    
      useEffect(() => {
        dispatch({ type: LOAD_CATEGORIES });
      }, []);


    const [value, setValue] = React.useState(new Date());



        let webApiUrl = 'http://localhost:8080/api/v1/events';
        let tokenStr = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2Mzg5NTcxNjUsImV4cCI6MTYzOTA0MzU2NSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGdtYWlsLmNvbSJ9.cRDNRlFB0oGoGx-WayU3KNvtoR9vJt4r2hx6Icb1qSAfHXkBN_yNDKbHX6iYsBg6jOsJUwfkKu39mDjIKMLKM0uxM57JIHKljpP4XKGLx4u3mluifF9riRqiqVK4fUSt_ySLnQf7itOBY-00fKd6vBd4t-TDHX_wGfUIvWOX-sVDsKPuuTd1HAF1Kt16HjGHl0jFhP020kutXvNrW_yz5Snp4QahrTZELYz7ezhDaRb1CRU9IAsv5PzJb0wDhrphqmcUTPOmI1Fm2FrsM039uDOOGWjjDwh0YUEg6dFMaSRUWmXi5VPqTOU3W4-yALt2vUSlXI5V_aEaS6eAVwz-CQ';
        


         
    const onSubmit = async (values) => {
        alert(JSON.stringify(values, null, 2)); 

           const { ...data } = values; 


            axios({
                headers: { "Authorization": `Bearer ${tokenStr}` } ,
                 data: data,
                 url: webApiUrl,
                 method: 'post',

            })
            .then(function (reponse) {
                //On traite la suite une fois la réponse obtenue 
                console.log(reponse);
            })
            .catch(function (erreur) {
                //On traite ici les erreurs éventuellement survenues
                console.log(erreur);
            });

       /*  if (response && response.data) {

              setError(null);
            setSuccess(response.data.message);  
            
            console.log(response);
            formik.resetForm();
        }  */
  
    }; 
    

    const formik = useFormik({


                //TODO RECUP EVENT DATA SELON ID
                
        initialValues: {
            title: '',
            place: '',
            description: '',
            maxMenbers: '',
            isOnline: '', 
            category: '',
            date: new Date(),
            author:'', 
            picture: '', 
        },
        validationSchema: yup.object({
            eventName: yup
                .string('Entré le nom de l\'évènement')
                .min(3, 'Un nom d\'évènement doit contenir 3 caractères minimum')
                .required('Le nom de l\'évènement doit être rempli'),
            place: yup
                .string('Entré un lieu valide')
                .min(3, 'Un lieu doit contenir au moins 3 lettres')
                .required('Un lieu est requis'),
            description: yup
                .string('Entré une description')
                .min(20, 'Une description doit contenir 20 caractères au minimum')
                .required('Une description est requise'),
            numberOfPeople: yup
                .number('Entré un nombre maximum de participant ')
                .min(2, 'Un évènement doit avoir un moins 2 participant')
                .required('Le nombre maximum de participant est requis'),

              
             
        },
        onSubmit,
        ),


    });

    



    console.log("Error: ", formik.errors);


    return (

        <div>


            <h2> Modifier votre évènement </h2>

            <form onSubmit={formik.handleSubmit} /*method="POST"*/>

                <div className='event__form__if'>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Type d'évènement</FormLabel>
                        <RadioGroup
                            row aria-label="type"
                        >
                            <FormControlLabel value="online"
                             name="picked" 
                            control={<Radio />} 
                            onChange={formik.handleChange} 
                            label="En ligne" />
                            <FormControlLabel value="realLife"
                             name="picked" 
                            control={<Radio />} 
                            onChange={formik.handleChange} 
                            label="En présentiel" />
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className='event__form__name'>
                    <TextField fullWidth label="Nom de l'évènement" className="eventForm"
                        id="eventName"
                        name="eventName"
                        type="eventName"
                        value={formik.values.eventName}
                        onChange={formik.handleChange}
                        error={formik.touched.eventName && Boolean(formik.errors.eventName)}
                        helperText={formik.touched.eventName && formik.errors.eventName} />

                </div>

                <div className='event__form__date'>
                    <FormControl fullWidth>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DateTimePicker
                                renderInput={(props) => <TextField {...props} />}
                                label="Date & Heure"
                                value={formik.touched.date}
                                id="date"
                                name="date"
                                format="MM/dd/yyyy"
                                type="date"
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                minDateTime={new Date()} 
                                
                            />
                        </LocalizationProvider>
                    </FormControl>
                </div>

                <div className='event__form__place'>
                    <TextField fullWidth label="Lieu" className="eventForm"
                        id="place"
                        name="place"
                        type="place"
                        value={formik.values.place}
                        onChange={formik.handleChange}
                        error={formik.touched.place && Boolean(formik.errors.place)}
                        helperText={formik.touched.place && formik.errors.place} />
                </div>
                
                <div className='event__form__select'>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Choix de catégorie</InputLabel>
                        <Select
                            labelId="event_form_single_select_label"
                            id="event_form_single_select"
                            label="categorySelect"
                            name="categorySelect"
                            value={formik.values.categorySelect}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} >

                            
                            {/*  {categorieList.map((category) => (
                            <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>       
                       ))} } */}
                            <MenuItem value={2}>Category2</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                                                           
                <div className='event__form__photo'>
                    <FormControl fullWidth>
                        <label htmlFor="contained-button-file">
                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
                            <Button 
                            sx={{ backgroundColor: '#9FBFFF', '&:hover': { backgroundColor: '#82B5A5' } }}
                             fullWidth variant="contained" 
                             component="span">
                                Téléchargez votre image de couverture d'évènement
                            </Button>

                        </label>
                    </FormControl>
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
                        id="numberOfPeople"
                        name="numberOfPeople"
                        type="numberOfPeople"
                        value={formik.values.numberOfPeople}
                        onChange={formik.handleChange}
                        error={formik.touched.numberOfPeople && Boolean(formik.errors.numberOfPeople)}
                        helperText={formik.touched.numberOfPeople && formik.errors.numberOfPeople} />
                </div>
                <div className='event__form__buttom'>
                    <FormControl fullWidth>
                        <Button
                         sx={{ backgroundColor: '#F36B7F', '&:hover': { backgroundColor: '#F8CF61' } }} 
                        variant="contained"
                         type="submit">
                         Modifer mon évènement
                         </Button>
                    </FormControl>
                </div>
            </form>
        </div>

    );
};


export default EventEdit;