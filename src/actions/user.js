export const LOGIN = 'LOGIN';

export const login = (values) => ({
  type: LOGIN,
  values
});

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const setCurrentUser = (values) => ({
    type: SET_CURRENT_USER,
    values
});

export const SIGNUP = 'SIGNUP';

export const signup = (values) => ({
    type: SIGNUP,
    values
})

export const LOGOUT = 'LOGOUT'

export const logout = (values) => ({
    type: LOGOUT,
    values
})

export const STOCK_LOGIN_COOKIE = 'STOCK_LOGIN_COOKIE'

export const stockLoginCookie = (token, user) => ({
    type: STOCK_LOGIN_COOKIE,
    token,
    user
})

export const SET_JOIN_EVENT_STATUS = 'SET_JOIN_EVENT_STATUS';

export const setJoinEventStatus = () => ({
  type: SET_JOIN_EVENT_STATUS,
  
});
