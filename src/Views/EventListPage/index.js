import React from 'react';
import EventHeaderPage from '../../components/EventListPage/EventHeaderPage';
import Footer from '../../components/Footer';
import Header from '../../components/Header'

function EventListPage() {
  return (
    <div className="eventListPage">
        <Header />
        <EventHeaderPage />
        <Footer />
    </div>
  
  );
}

export default EventListPage;
