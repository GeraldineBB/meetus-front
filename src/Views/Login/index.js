import React from 'react';
import Footer from '../../components/Footer';
import HeaderLogin from '../../components/LoginPage/HeaderLogin';
import LoginForm from '../../components/LoginPage/LoginForm';
import './style.scss';



function LoginPage() {
  return (
    <div className="loginPage">
        <HeaderLogin />
        <LoginForm />
    </div>
  
  );
}

export default LoginPage;
