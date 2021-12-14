// action to load 3 next events on homepage (middleware)
export const LOAD_EVENTS_FOR_HOME = 'LOAD_EVENTS_FOR_HOME';

export const loadEventsForHome = () => ({
  type: LOAD_EVENTS_FOR_HOME,
  
});

// action to change state with the 3 next events on homepage (reducer)
export const SET_EVENT_FOR_HOME = 'SET_EVENT_FOR_HOME';

export const setEventForHome = (value) => ({
  type: SET_EVENT_FOR_HOME,
  value, 
});

// action to load 6 categories on homepage (middleware)
export const LOAD_CATEGORIES_FOR_HOME = 'LOAD_CATEGORIES_FOR_HOME';

export const loadCategoriesForHome = () => ({
  type: LOAD_CATEGORIES_FOR_HOME,
  
});


// action to change state with 6 categories on homepage (reducer)
export const SET_CATEGORIES_FOR_HOME = 'SET_CATEGORIES_FOR_HOME';

export const setCategoriesForHome = (value) => ({
  type: SET_CATEGORIES_FOR_HOME,
  value, 
});

// action load all categories on event form (middleware)
export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';

export const loadCategories = () => ({
  type: LOAD_CATEGORIES,
  
});

// action to change all categories on event form (reducer)
export const SET_CATEGORIES = 'SET_CATEGORIES';

export const setCategories = (value ) => ({
  type: SET_CATEGORIES,
  value, 
});


// action to load event info on event edit form
export const LOAD_EVENT_INFO_FOR_EDIT_FORM = 'LOAD_EVENT_INFO_FOR_EDIT_FORM';

export const setEventInfoForEditForm = (eventId) => ({
  type: LOAD_EVENT_INFO_FOR_EDIT_FORM,
  eventId: eventId}); 
// action to change state with event list in progress on eventlist page (reducer)
export const SET_EVENT_LIST_IN_PROGRESS = 'SET_EVENT_LIST_IN_PROGRESS';

export const setEventListInProgress = (value) =>({
  type: SET_EVENT_LIST_IN_PROGRESS,
  value,
});

// action to load state with event list in progress on eventlist page (reducer)
export const LOAD_EVENT_LIST_IN_PROGRESS = 'LOAD_EVENT_LIST_IN_PROGRESS';

export const loadEventListInProgress = (value) =>({
  type: LOAD_EVENT_LIST_IN_PROGRESS,
  value,
});

// action to change state with archived event list on eventlist page (reducer)
export const SET_EVENT_LIST_ARCHIVED = 'SET_EVENT_LIST_ARCHIVED';

export const setEventListArchived = (value) =>({
  type: SET_EVENT_LIST_ARCHIVED,
  value,
})

// action to load state with archived event list on eventlist page (reducer)
export const LOAD_EVENT_LIST_ARCHIVED = 'LOAD_EVENT_LIST_ARCHIVED';

export const loadEventListArchived = (value) =>({
  type: LOAD_EVENT_LIST_ARCHIVED,
  value,
})

export const IN_PROGRESS = 'IN_PROGRESS';

export const inProgress = () => ({
  type: IN_PROGRESS,
})

export const ARCHIVED = 'ARCHIVED';

export const archived = () => ({
  type: ARCHIVED,
})

export const SEARCH_BAR_EVENT_LIST = 'SEARCH_BAR_EVENT_LIST';

export const searchBarEventList = (value) => ({
  type: SEARCH_BAR_EVENT_LIST,
  value
})

export const LOAD_SELECT_CATEGORIES_EVENT_LIST = 'LOAD_SELECT_CATEGORIES_EVENT_LIST';

export const loadSelectCategoriesEventList = () => ({
  type: LOAD_SELECT_CATEGORIES_EVENT_LIST,
});

export const SET_SELECT_CATEGORIES_EVENT_LIST = 'SET_SELECT_CATEGORIES_EVENT_LIST';

export const setSelectCategoriesEventList = (value) => ({
  type: SET_SELECT_CATEGORIES_EVENT_LIST,
  value
})

export const SELECT_CATEGORIES_EVENT_LIST_IS_OPEN = 'SELECT_CATEGORIES_EVENT_LIST_IS_OPEN';

export const selectCategoriesEventListIsOpen = () => ({
  type: SELECT_CATEGORIES_EVENT_LIST_IS_OPEN,
})

export const SELECT_CATEGORIES_EVENT_LIST_IS_CLOSE = 'SELECT_CATEGORIES_EVENT_LIST_IS_CLOSE';

export const selectCategoriesEventListIsClose = () => ({
  type: SELECT_CATEGORIES_EVENT_LIST_IS_CLOSE,
})

export const CURRENT_SELECT_CATEGORIES_EVENT_LIST= 'CURRENT_SELECT_CATEGORIES_EVENT_LIST';

export const currentSelectCategoriesEventList = (value) => ({
  type: CURRENT_SELECT_CATEGORIES_EVENT_LIST,
  value
})

// action to load event info on eventPage
export const LOAD_INFO_FOR_PAGE_EVENT = 'LOAD_INFO_FOR_PAGE_EVENT';

export const loadInfoForPageEvent = (eventId) => ({
  type: LOAD_INFO_FOR_PAGE_EVENT,
  eventId: eventId
});

// action to set event info on eventPage
export const SET_INFO_FOR_EVENTPAGE = 'SET_INFO_FOR_EVENTPAGE';

export const setInfoForEventPage = (value) => ({
  type: SET_INFO_FOR_EVENTPAGE,
  value,
});

// action to add an user to an event
export const ADD_USER_TO_EVENT = 'ADD_USER_TO_EVENT';

export const addUserToEvent = 
  (userId, 
  eventId) => ({
  type: ADD_USER_TO_EVENT,
  eventId, 
  userId, 
});

export const SET_RESPONSE = 'SET_RESPONSE';

export const setResponse = () => ({
  type: SET_RESPONSE,
  
});