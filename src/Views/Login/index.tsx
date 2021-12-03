import React from 'react';
import HeaderLogin from '../../components/LoginPage/HeaderLogin';
import LoginForm from '../../components/LoginPage/LoginForm';
import './style.scss';



function Login() {
  return (
    <div className="loginPage">
        <HeaderLogin />
        <LoginForm />
    </div>
  
  );
}

export default Login;
