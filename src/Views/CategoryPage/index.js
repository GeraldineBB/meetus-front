import EventHeaderPageCategory from "../../components/Category/EventHeaderPageCategory";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { IN_PROGRESS } from "../../actions/events";

import { useParams } from "react-router-dom";
import EventListCardsInProgressCategory from "../../components/Category/EventListCardsInProgressCategory";

// in order to reuse code, CategoryPage is similar to EventListPage
// 1. we take same components but they are simplified (no search bar and no select)
// 2. thanks to useParam we can have categoryId in sub components
// 3. we compare categoryId with information we get from the api v1/events
// 4. we filter the list of events depending on categoryId and we map on this new list

function CategoryPage() {

    let { id } = useParams();


  const { inProgress, archived } = useSelector((state) => state.events);
  const dispatch = useDispatch();

  const handleInProgress = () => {
    dispatch({ type: IN_PROGRESS });
  };
  return (
    <div className="eventListPage">
      <Header />
      <EventHeaderPageCategory
        handleInProgress={handleInProgress}
        inProgress={inProgress}
        archived={archived}
      />
      <EventListCardsInProgressCategory categoryId={id} /> 
      <Footer />
    </div>
  );
}

export default CategoryPage;
