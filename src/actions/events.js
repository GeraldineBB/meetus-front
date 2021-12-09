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

export const setCategoriesForHome = (value ) => ({
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

// action to set event info on eventPage
export const SET_INFO_FOR_EVENTEDIT = 'SET_INFO_FOR_EVENTPAGE';

export const setInfoForEventPage = (value) => ({
  type: SET_INFO_FOR_EVENTEDIT,
  value,
});


// action to load event info on event edit form
export const LOAD_EVENT_INFO_FOR_EDIT_FORM = 'LOAD_EVENT_INFO_FOR_EDIT_FORM';

export const setEventInfoForEditForm = () => ({
  type: LOAD_EVENT_INFO_FOR_EDIT_FORM,
  
});