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
import { styled } from '@mui/material/styles';

import { NavLink, Redirect, Navigate } from "react-router-dom";

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

import { useFormik } from 'formik';
import * as yup from 'yup';
 
import axios from "axios"; 


/* 
import { LOAD_CATEGORIES } from "../../../actions/events";  */


/* Access to XMLHttpRequest at 'http://localhost:8080/api/v1/events' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: It does not have HTTP ok status.
index.js:72 Error: Network Error
    at createError (createError.js:16)
    at XMLHttpRequest.handleError (xhr.js:117)
xhr.js:210 POST http://localhost:8080/api/v1/events net::ERR_FAILED 


xhr.js:210 GET http://localhost:8080/api/v1/categories 401 (Unauthorized)
*/
//TODO CORRIGER ERREUR ADD EVENTS


const EventForm = () => {

    const Input = styled('input')({
        display: 'none',
    });
    const [value, setValue] = React.useState(new Date());
    let webApiUrl = 'http://localhost:8080/api/v1/events';
    let tokenStr = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MzkwNDcyNTIsImV4cCI6MTYzOTEzMzY1Miwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGdtYWlsLmNvbSJ9.M6L_r4JLHAg4fixUdCl9jQKA9lbE9kqP1LsZ0MVfyF4gd4_0PlU-NRmoJCjF-rWTPYseZO-4mlADhHANWwoLsfb8T-yl0-MmkeCVgTZit1ppyB9Gn8pbEtw9H-LO-FTZNZ2G7dOhO6laCdQwg-4Ind-7SFBelp-tW73FCh0cpIQ43pddObuO4R44IYM69ot6AnTbi6RlxLd14Z-wvLDNGktLtGzfKY6rHOJXqjYqNbCHgDepFZAt0BYRMBEmZ_myJx1Y468n7inH_Zc01sDcyf8X0VjUzTSOMuDmhe6rkCBAqkwh61c8MPLIYXEPyoT3aXVLAv3FQC1kNqVAIW2DDA';
    
    /* const categorieList = useSelector(
        (state) => state.categories.categorieList
    );
 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: LOAD_CATEGORIES });
    }, []);
 */

    
    const [responseFormValidateEdit, setResponseValidateEdit] = useState(false); 
    

     
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
                setResponseValidateEdit(true);
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
                .min(20, 'Une description doit contenir 20 caractères au minimum')
                .required('Une description est requise'),
            maxMembers: yup
                .number('Entré un nombre maximum de participant ')
                .min(2, 'Un évènement doit avoir un moins 2 participant')
                .required('Le nombre maximum de participant est requis'),

            //TODO DATE ET FILE VALIDATION, TYPEOF YUP A REVOIR 

        });


        const formik = useFormik({
            initialValues: {
                title: '',
                city: '',
                description: '',
                maxMembers: '',
                isOnline: '', //TODO VOIR AVEC BACK >> Changer route envoi selon Online ou Présentiel
                category: '',
                date: '',
                picture: '', //TODO INPUT FILE FORMIK https://stackoverflow.com/questions/56149756/reactjs-how-to-handle-image-file-upload-with-formik
            },
            validationSchema: validationSchema,
            onSubmit,
          });
       

            
 
/* 

    console.log("Error: ", formik.errors);  
 */

    if (responseFormValidateEdit)  {
        return <Navigate to="/" />
      }    
    return (

        <div>
            <h2> Créer votre évènement </h2>

            <form onSubmit={formik.handleSubmit} >

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
                                renderInput={(props) => <TextField {...props} />}
                                label="Date & Heure"
                                value={value}//TODO REVOIR LA RECUP DE LA VALUE
                                id="date"
                                name="date"
                                format="MM/dd/yyyy"
                                type="date"
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                minDateTime={new Date()}
                            // TODO (mémo : + 86400000 1 JOUR) TODO Rajouté +1 jour a la date minimum, pas réussi encore.
                            />
                        </LocalizationProvider>
                    </FormControl>
                </div>

                <div className='event__form__place'>
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
                            label="categorySelect"
                            name="categorySelect"
                            defaultValue=""
                            type="select"
                            value={formik.values.categorySelect}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} >

                             {/* //TODO ICI UNE MAP DE CATEGORIE A VERIFIER SI CA FONCTIONNE et renvoyé id
                              {categorieList.map((category) => (
                                
                            <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>   
                               
                       ))}   */}
                            <MenuItem value={2}>Category2</MenuItem>
                            <MenuItem value={3}>Category3</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                {/* //TODO  REUSSIR A RECUPERER UN INPUT FILE ET LENVOYER AU BACK */}
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