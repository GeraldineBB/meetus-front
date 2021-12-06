import React from 'react';
import EventHeaderPage from '../../components/EventListPage/EventHeaderPage';
import EventListCards from '../../components/EventListPage/EventListCards';
import Footer from '../../components/Footer';
import Header from '../../components/Header'

function EventListPage() {
  return (
    <div className="eventListPage">
        <Header />
        <EventHeaderPage />
        <EventListCards />
        <Footer />
    </div>
  
  );
}

export default EventListPage;
