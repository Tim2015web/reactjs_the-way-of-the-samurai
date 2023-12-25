import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { thunk } from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import { profileReducer } from './profileReducer';
import { messagesReducer } from './messagesReducer';
import { sideBarReducer } from './sideBarReducer';
import { usersReducer } from "./usersReducer";
import { authReducer } from "./authReducer";
import { appReducer } from "./appReducer";

const rootReducer = combineReducers({
  form: formReducer,
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  sideBar: sideBarReducer,
  auth: authReducer,
  appReducer: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

// export let store = createStore(rootReducer, applyMiddleware(thunk));