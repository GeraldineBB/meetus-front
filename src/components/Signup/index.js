import React from "react";
import './style.scss';
import { NavLink, Redirect, Navigate } from "react-router-dom";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { MenuItem } from '@mui/material';
import { FormControl } from '@mui/material';
import { useState, useSelector } from "react";

import { useDispatch } from "react-redux";

import { useFormik } from 'formik';
import * as yup from 'yup';

import axios from "axios";

import HeaderSignUp from "./HeaderSignup";
import { signup } from "../../actions/user";



const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

const validationSchema = yup.object({
  firstname: yup
    .string()
    .min(3, "Entrez votre prénom s'il vous plait")
    .required("Votre prénom est requis"),
    lastname: yup
    .string()
    .min(3, "Entrez votre nom s'il vous plait")
    .required("Votre nom est requis"),
  email: yup.string().email("Entrez un email valide s'il vous plait").required(),
  password: yup
    .string()
    .matches(PASSWORD_REGEX, "Entrez un mot de passe contenant au moins 8 caractères, une majuscule et un caractère spécial")
    .required(),
  confirmPassword: yup
    .string()
    .required("Comfirmez votre mot de passe")
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref("password")], "Les mots de passe ne correspondent pas"),
    }),
});




export function SignUpForm(props) {
  

    const [responseFormValidate, setResponseValidate] = useState(false); 
    

    const dispatch = useDispatch();

        const onSubmit = async (values) => {
          /* alert(JSON.stringify(values, null, 2)); */
          dispatch(signup(values));
      }; 


  const formik = useFormik({
    initialValues: {
      lastname: "",
      firstname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validateOnBlur: true,
    onSubmit,
    /* validationSchema: validationSchema, */
  });

/* 
  console.log("Error: ", formik.errors);  */

  if (responseFormValidate)  {
    return <Navigate to="/signup-done" />
  } 

  return (

    <div>

      <HeaderSignUp />

      <h2> Créer un compte </h2>

      <form onSubmit={formik.handleSubmit} >

        <div className='event__form__lastname'>
          <TextField fullWidth label="Votre nom" className="lastname"
            id="lastname"
            name="lastname"
            type="lastname"
            value={formik.values.eventName}
            onChange={formik.handleChange}
            error={formik.touched.lastname && Boolean(formik.errors.lastname)}
            helperText={formik.touched.lastname && formik.errors.lastname} />

        </div>



        <div className='event__form__firstname'>
          <TextField fullWidth label="Votre prénom" className="firstname"
            id="firstname"
            name="firstname"
            type="firstname"
            value={formik.values.firstname}
            onChange={formik.handleChange}
            error={formik.touched.firstname && Boolean(formik.errors.firstname)}
            helperText={formik.touched.firstname && formik.errors.firstname} />
        </div>





        <div className='event__form__email'>
          <TextField fullWidth label="Votre email"
            className="email"
            id="email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email} />
        </div>

        <div className='event__form__password'>
          <TextField fullWidth label="Votre mot de passe"
            className="password"
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password} />
        </div>

        <div className='event__form__confirmPassword'>
          <TextField fullWidth label="Confirmez votre mot de passe"
            className="confirmPassword"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword} />
        </div>




        <div className='event__form__buttom'>
          <FormControl fullWidth>
            <Button
              sx={{ backgroundColor: '#F36B7F', '&:hover': { backgroundColor: '#F8CF61' } }}
              variant="contained"
              type="submit">
              Créer mon compte
            </Button>
          </FormControl>
        </div>
      </form>

      <div className='event__form__buttom'>

        <div className ='linkAlreadyAccount' >
          <NavLink style={{ textDecoration: "none", color: "red" }} to="/login"> 
            <p>
              Vous possédez déjà un compte ?
            </p>
          </NavLink>

        </div>

      </div>


    </div>
   

  );


}