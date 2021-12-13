export const LOGIN = 'LOGIN';

export const login = (values) => ({
  type: LOGIN,
  values
});

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const setCurrentUser = (values) => ({
    type: SET_CURRENT_USER,
    values
})

export const LOGOUT = 'LOGOUT'

export const logout = (values) => ({
    type: LOGOUT,
    values
})