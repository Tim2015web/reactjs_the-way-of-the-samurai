import { stopSubmit } from "redux-form";
import { usersAPI } from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';
let initialState = { id: null, login: null, email: null, isAuth: false };

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA: return { ...state, ...action.data }
    default: return state;
  };
};

export function setAuthUserData(id, login, email, isAuth) {
  return { type: SET_USER_DATA, data: { id, login, email, isAuth } }
};

export const getAuth = () => async (dispatch) => {
  let data = await usersAPI.getAuth();
  if (data.resultCode === 0) dispatch(setAuthUserData(data.data.id, data.data.login, data.data.email, true));
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  let data = await usersAPI.getLogin(email, password, rememberMe);
  if (data.resultCode === 0) {
    dispatch(getAuth());
  } else {
    dispatch(stopSubmit('auth', { _error: data.messages[0] }));
  }
};

export const logout = () => async (dispatch) => {
  let data = await usersAPI.getLogout();
  if (data.resultCode === 0) dispatch(setAuthUserData(null, null, null, false));
};
