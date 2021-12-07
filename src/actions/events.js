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
export const LOAD_CATEGORIES = 'LOAD_CATEGORIESE';

export const loadCategories = () => ({
  type: LOAD_CATEGORIES,
  
});