import EventHeaderPageCategory from "../../components/Category/EventHeaderPageCategory";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { ARCHIVED, IN_PROGRESS } from "../../actions/events";

import { useParams } from "react-router-dom";
import EventListCardsInProgressCategory from "../../components/Category/EventListCardsInProgressCategory";
import EventListCardsArchivedCategory from "../../components/Category/EventListCardsArchivedCategory";


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
      <EventHeaderPageCategory
        handleArchived={handleArchived}
        handleInProgress={handleInProgress}
        inProgress={inProgress}
        archived={archived}
      />
      {inProgress ? <EventListCardsInProgressCategory categoryId={id} /> : <EventListCardsArchivedCategory categoryId={id} />}
      <Footer />
    </div>
  );
}

export default CategoryPage;
