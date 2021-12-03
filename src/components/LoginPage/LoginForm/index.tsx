import * as React from 'react';
import TextField from '@mui/material/TextField';
import './style.scss';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function LoginForm() {
  return (
    <div className='login'>
        <h2>Se connecter</h2>

      <div className='login__form__email'>
            <TextField fullWidth label="Email" className="loginForm" />
      </div>

      <div className='login__form__password'>
            <TextField fullWidth label="Mot de passe" className="loginForm"/>
            <NavLink style={{textDecoration: 'none', color: 'black'}} to='/passwordForgot'><span>Mot de passe oublié ?</span></NavLink>
      </div>

      <div className='login__form__button'>
        <Button variant="contained">Se connecter</Button>
      </div>

      <NavLink style={{textDecoration: 'none', color: 'black'}} to=''><span className='alreadyAccount'>Vous possédez déjà un compte ?</span></NavLink>
    </div>
  );
};
