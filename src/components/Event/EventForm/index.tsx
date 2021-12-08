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
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

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
                    <TextField fullWidth label="Date et heure" className="eventForm" />
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
                    <Stack >
                        <label htmlFor="contained-button-file">
                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
                            <Button variant="contained" component="span">
                                Téléchargez votre image de couverture d'évènement
                            </Button>
                        </label>
                    </Stack>

                </div>

                <div className='event__form__description'>
                    <TextField fullWidth label="Votre description" className="eventForm" />
                </div>

                <div className='event__form__number'>
                    <TextField fullWidth label="Nombre maximum de participant" className="eventForm" />
                </div>

                <Button sx={{ backgroundColor: '#F36B7F', '&:hover': { backgroundColor: '#F8CF61' } }} /* onSubmit='TODO' */ className='event__form__buttom' variant="contained">Créer mon évènement</Button>
            </form >


        </div >

    );
};

export default EventForm;