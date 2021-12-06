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


const EventForm = () => {

    const Input = styled('input')({
        display: 'none',
    });


    return (

        <div>
            <h2> Créer votre évènement </h2>
            <form>
                <div className='event__form__if'>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Type d'évènement</FormLabel>
                        <RadioGroup
                            row aria-label="type"
                            name="controlled__radio__buttons__group"
                            value='TODO'
                        /* onChange='TODOHANDLE' */
                        >
                            <FormControlLabel value="online" control={<Radio />} label="En ligne" />
                            <FormControlLabel value="realLife" control={<Radio />} label="En présentiel" />
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className='event__form__name'>
                    <TextField fullWidth label="Nom de l'évènemnt" className="eventForm" />
                </div>

                <div className='event__form__date'>
                <FormControl fullWidth>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} />}
                            label="Date & Heure"
                            value=''
                            onChange={(newValue) => {
                                /* setValue(newValue); */
                            }}
                        />
                    </LocalizationProvider>
                    </FormControl>
                </div>

                <div className='event__form__place'>
                    <TextField fullWidth label="Lieu" className="eventForm" />
                </div>

                <div className='event__form__select'>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Choix de catégorie</InputLabel>
                        <Select
                            labelId="event_form_single_select_label"
                            id="event_form_single_select"
                            value='TODO'
                            label="categorySelect"
                        /* onChange='TODOHANDLE' */
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
                            <Button fullWidth variant="contained" component="span">
                                Téléchargez votre image de couverture d'évènement
                            </Button>

                        </label>
                    </FormControl>
                </div>

                <div className='event__form__description'>
                    <TextField fullWidth label="Votre description" className="eventForm" />
                </div>

                <div className='event__form__number'>
                    <TextField fullWidth label="Nombre maximum de participant" className="eventForm" />
                </div>
                <div className='event__form__buttom'>
                    <FormControl fullWidth>
                        <Button sx={{ backgroundColor: '#F36B7F', '&:hover': { backgroundColor: '#F8CF61' } }} /* onSubmit='TODO' */ variant="contained">Créer mon évènement</Button>
                    </FormControl>
                </div>
            </form >


        </div >

    );
};

export default EventForm;