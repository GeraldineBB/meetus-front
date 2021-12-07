import React, { useEffect } from "react";
import EventHeaderPage from "../../components/EventListPage/EventHeaderPage";
import EventListCards from "../../components/EventListPage/EventListCardsInProgress";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useSelector, useDispatch } from "react-redux";
import {
  ARCHIVED,
  IN_PROGRESS,
  LOAD_EVENT_LIST_IN_PROGRESS,
} from "../../actions/events";
import EventListCardsArchived from "../../components/EventListPage/EventListCardsArchived";
import EventListCardsInProgress from "../../components/EventListPage/EventListCardsInProgress";

function EventListPage() {
  const { inProgress, archived } = useSelector((state) => state.events);
  const dispatch = useDispatch();

  const handleArchived = () => {
    console.log("Archivé");
    dispatch({ type: ARCHIVED });
  };

  const handleInProgress = () => {
    console.log("En cours");
    dispatch({ type: IN_PROGRESS });
  };

  if (inProgress === true) {
    return (
      <div className="eventListPage">
        <Header />
        <EventHeaderPage
          handleArchived={handleArchived}
          handleInProgress={handleInProgress}
          inProgress={inProgress}
          archived={archived}
        />
        <EventListCardsInProgress />
        <Footer />
      </div>
    );
  }
  return (
    <div className="eventListPage">
      <Header />
      <EventHeaderPage
        handleArchived={handleArchived}
        handleInProgress={handleInProgress}
        inProgress={inProgress}
        archived={archived}
      />
      <EventListCardsArchived />
      <Footer />
    </div>
  );
}

export default EventListPage;
