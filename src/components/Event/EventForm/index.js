import React, { useEffect } from "react";
import "./style.scss";

import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { MenuItem } from "@mui/material";
import { Select } from "@mui/material";
import { FormControl } from "@mui/material";
import { FormLabel } from "@mui/material";
import { RadioGroup } from "@mui/material";
import { Radio } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { InputLabel } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { Form, Formik, useField, useFormikContext } from "formik";
import * as yup from "yup";
import HeaderSignUp from "../../Signup/HeaderSignup";
import {
  EventFormOnline,
  EventFormPresent,
  LOAD_CATEGORIES,
  setNewEvent,
  setNewEventOnline,
} from "../../../actions/events";
import { format } from "date-fns";

console.log(format(new Date(), "yyyy-dd-MM kk:mm:ss"));

const EventForm = () => {
  const dispatch = useDispatch();
  const categorieList = useSelector((state) => state.categories.categorieList);

  const { formIsPresent, formSuccess } = useSelector((state) => state.events);
  const navigate = useNavigate();
  const handleVerify = () => {
    if (formSuccess === true) {
      console.log(formSuccess);
      return navigate("/event-creation-done");
    }
  };
  const validationSchema = yup.object({
    title: yup
      .string("Entrez le nom de l'évènement")
      .min(10, "Un nom d'évènement doit contenir 10 caractères minimum")
      .required("Le nom de l'évènement doit être rempli"),
    description: yup
      .string("Entrez une description")
      .min(50, "Une description doit contenir 50 caractères au minimum")
      .required("Une description est requise"),
    maxMembers: yup
      .number("Entrez un nombre maximum de participant ")
      .min(2, "Un évènement doit avoir un moins 2 participant")
      .required("Le nombre maximum de participant est requis"),
  });

  const DatePickerField = ({ ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    return (
      <DateTimePicker
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(val) => {
          setFieldValue(field.name, val);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    );
  };

  const handleOnline = () => {
    dispatch(EventFormOnline());
  };

  const handlePresent = () => {
    dispatch(EventFormPresent());
  };

  useEffect(() => {
    dispatch({ type: LOAD_CATEGORIES });
  }, [dispatch]);
  handleVerify();

  const today = new Date();
  /* 
  console.log("Error: ", formik.errors);  */

  return (
    <>
      <HeaderSignUp />
      <h2> Créer votre évènement </h2>
      <Formik
        initialValues={{
          title: "",
          description: "",
          maxMembers: "",
          isOnline: "",
          category: "",
          date: new Date(new Date().setDate(today.getDate() + 1)),
          address: "",
          author: "",
          city: "",
          zipcode: "",
          country: "FRANCE",
        }}
        onSubmit={(values) => {
          formIsPresent
            ? dispatch(setNewEvent(values))
            : dispatch(setNewEventOnline(values));
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit} className="event-form-container">
            <div className="event__form__if">
              <FormControl component="fieldset">
                <FormLabel component="legend">Type d'évènement</FormLabel>
                <RadioGroup row aria-label="type">
                  <FormControlLabel
                    value="1"
                    name="isOnline"
                    control={<Radio />}
                    onClick={handleOnline}
                    onChange={handleChange}
                    label="En ligne"
                    checked={formIsPresent ? false : true}
                  />
                  <FormControlLabel
                    value="0"
                    name="isOnline"
                    control={<Radio />}
                    onClick={handlePresent}
                    onChange={handleChange}
                    label="En présentiel"
                    checked={formIsPresent ? true : false}
                  />
                </RadioGroup>
              </FormControl>
            </div>

            <div className="event__form__name">
              <TextField
                fullWidth
                label="Nom de l'évènement"
                className="eventForm"
                id="title"
                name="title"
                value={values.title}
                onChange={handleChange}
                error={touched.title && Boolean(errors.title)}
                helperText={touched.title && errors.title}
              />
            </div>

            <div className="event__form__date">
              <FormControl fullWidth>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePickerField name="date" />
                </LocalizationProvider>
              </FormControl>
            </div>
            {formIsPresent && (
              <>
                <div className="event__form__place">
                  <TextField
                    fullWidth
                    label="Adresse"
                    className="eventForm"
                    id="address"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    error={touched.address && Boolean(errors.address)}
                    helperText={touched.address && errors.address}
                  />
                </div>

                <div className="event__form__city">
                  <TextField
                    fullWidth
                    label="Ville"
                    className="eventForm"
                    id="city"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    error={touched.city && Boolean(errors.city)}
                    helperText={touched.city && errors.city}
                  />
                </div>

                <div className="event__form__zipcode">
                  <TextField
                    fullWidth
                    label="Code Postal"
                    className="eventForm"
                    id="zipcode"
                    name="zipcode"
                    value={values.zipcode}
                    onChange={handleChange}
                    error={touched.zipcode && Boolean(errors.zipcode)}
                    helperText={touched.zipcode && errors.zipcode}
                  />
                </div>
              </>
            )}

            <div className="event__form__select">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Choix de catégorie
                </InputLabel>
                <Select
                  labelId="event_form_single_select_label"
                  id="event_form_single_select"
                  label="category"
                  name="category"
                  type="select"
                  value={values.category}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {categorieList.map((category) => (
                    <MenuItem key={category.id} value={category.id}>
                      {category.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className="event__form__number">
              <TextField
                fullWidth
                label="Nombre maximum de participant"
                className="eventForm"
                id="maxMembers"
                name="maxMembers"
                value={values.maxMembers}
                onChange={handleChange}
                error={touched.maxMembers && Boolean(errors.maxMembers)}
                helperText={touched.maxMembers && errors.maxMembers}
              />
            </div>

            <div className="event__form__description">
              <TextField
                fullWidth
                label="Votre description"
                className="eventForm"
                id="description"
                name="description"
                type="description"
                value={values.description}
                onChange={handleChange}
                error={touched.description && Boolean(errors.description)}
                helperText={touched.description && errors.description}
              />
            </div>

            <div className="event__form__buttom">
              <FormControl fullWidth>
                <Button
                  sx={{
                    backgroundColor: "#F36B7F",
                    "&:hover": { backgroundColor: "#F8CF61" },
                  }}
                  variant="contained"
                  type="submit"
                >
                  Créer mon évènement
                </Button>
              </FormControl>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default EventForm;
