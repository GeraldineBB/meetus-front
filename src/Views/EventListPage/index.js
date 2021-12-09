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
    dispatch({ type: ARCHIVED });
  };

  const handleInProgress = () => {
    dispatch({ type: IN_PROGRESS });
  };
  return (
    <div className="eventListPage">
      <Header />
      <EventHeaderPage
        handleArchived={handleArchived}
        handleInProgress={handleInProgress}
        inProgress={inProgress}
        archived={archived}
      />
      {inProgress ? <EventListCardsInProgress /> : <EventListCardsArchived />}
      <Footer />
    </div>
  );
}

export default EventListPage;
