import React from 'react';
import TextField from '@mui/material/TextField';
import './style.scss';

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



const EventForm = () => {

    const Input = styled('input')({
        display: 'none',
    });

        
        const formik = useFormik({
            initialValues: {
                eventName: '',
                place:'',
                description:'',
                numberOfPeople:'',
                picked: '',
                categorySelect: '',
                date:  new Date() ,
            },
            /* validationSchema: yup.object({
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
            }), */
            onSubmit: values => {
              alert(JSON.stringify(values, null, 2));
            },
          });


     
        
        const [value, setValue] = React.useState(new Date());
        

    return (
        
        <div>


            <h2> Créer votre évènement </h2>

            <form onSubmit={formik.handleSubmit}>

                <div className='event__form__if'>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Type d'évènement</FormLabel>
                        <RadioGroup
                            row aria-label="type"
                        >
                            <FormControlLabel value="online" name="picked" control={<Radio />} onChange={formik.handleChange} label="En ligne" />
                            <FormControlLabel value="realLife" name="picked" control={<Radio />}  onChange={formik.handleChange} label="En présentiel" />
                            {/* <div>Picked TEST: {formik.values.picked}</div> */}
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className='event__form__name'>
                    <TextField fullWidth label="Nom de l'évènement" className="eventForm" 
                        /* onChange='TODOHANDLE' */
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
                                minDateTime={new Date( ) } ///+ 86400000 1 JOUR
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
                        helperText={formik.touched.place && formik.errors.place}  />
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
                            onBlur={formik.handleBlur}
                        
                        >
                            {/* //TODO ICI UNE MAP DE CATEGORIE */}
                            <MenuItem value={1}>Category1</MenuItem>
                            <MenuItem value={2}>Category2</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className='event__form__photo'>
                    <FormControl fullWidth>
                        <label htmlFor="contained-button-file">

                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
                            <Button sx={{ backgroundColor: '#9FBFFF', '&:hover': { backgroundColor: '#82B5A5' } }} fullWidth variant="contained" component="span">
                                Téléchargez votre image de couverture d'évènement
                            </Button>

                        </label>
                    </FormControl>
                </div>

                <div className='event__form__description'>
                    <TextField fullWidth label="Votre description" 
                    className="eventForm" 
                        /* onChange='TODOHANDLE' */ 
                        id="description"
                        name="description"
                        type="description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        error={formik.touched.description && Boolean(formik.errors.description)}
                        helperText={formik.touched.description && formik.errors.description}/>
                </div>

                <div className='event__form__number'>
                    <TextField fullWidth label="Nombre maximum de participant" 
                    className="eventForm" 
                        /* onChange='TODOHANDLE' */
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
                        <Button sx={{ backgroundColor: '#F36B7F', '&:hover': { backgroundColor: '#F8CF61' } }} variant="contained" type="submit">Créer mon évènement</Button>
                    </FormControl>
                </div>
            </form>
        </div>

    );
};


export default EventForm;