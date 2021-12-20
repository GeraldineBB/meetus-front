import React from 'react';
import NotFound from '../../components/404';
import Footer from '../../components/Footer';
import Header from '../../components/Header';



function NotFoundPage() {
  return (
    <div className="404Page">
        <Header />
        <NotFound />
        <Footer />
    </div>
  
  );
}

export default NotFoundPage;
