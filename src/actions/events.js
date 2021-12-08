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

// action to set id of the event in state
export const SET_ID_EVENT = 'SET_ID_EVENT';

export const setIdEvent = (idValue) => ({
  type: SET_ID_EVENT,
  idValue
});


// action to load event info on eventPage
export const LOAD_INFO_FOR_PAGE_EVENT = 'LOAD_INFO_FOR_PAGE_EVENT';

export const loadInfoForPageEvent = () => ({
  type: LOAD_INFO_FOR_PAGE_EVENT,
  
});

// action to set event info on eventPage
export const SET_INFO_FOR_EVENTPAGE = 'SET_INFO_FOR_EVENTPAGE';

export const setInfoForEventPage = (value) => ({
  type: SET_INFO_FOR_EVENTPAGE,
  value,
});


