export const SET_VALUE = 'SET_VALUE';

export const setValueRedux = (values) => ({
    type: SET_VALUE,
    values
});

export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';

export const setInputValueRedux = (values) => ({
    type: SET_INPUT_VALUE,
    values
});

export const SET_OPTIONS = 'SET_OPTIONS';

export const setOptionsRedux = (values) => ({
    type: SET_OPTIONS,
    values
});

export const SET_LOADED = 'SET_LOADED';

export const setLoadedRedux = () => ({
    type: SET_LOADED,
});