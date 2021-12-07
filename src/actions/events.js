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

// action to change state with event list in progress on eventlist page (reducer)
export const SET_EVENT_LIST_IN_PROGRESS = 'SET_EVENT_LIST_IN_PROGRESS';

export const setEventListInProgress = (value) =>({
  type: SET_EVENT_LIST_IN_PROGRESS,
  value,
})

// action to load state with event list in progress on eventlist page (reducer)
export const LOAD_EVENT_LIST_IN_PROGRESS = 'LOAD_EVENT_LIST_IN_PROGRESS';

export const loadEventListInProgress = (value) =>({
  type: LOAD_EVENT_LIST_IN_PROGRESS,
  value,
})

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