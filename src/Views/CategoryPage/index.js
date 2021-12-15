import EventHeaderPage from "../../components/EventListPage/EventHeaderPage";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { ARCHIVED, IN_PROGRESS } from "../../actions/events";
import EventListCardsArchived from "../../components/EventListPage/EventListCardsArchived";
import EventListCardsInProgress from "../../components/EventListPage/EventListCardsInProgress";

import { useParams } from "react-router-dom";


function CategoryPage() {

    let { id } = useParams();


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

export default CategoryPage;
