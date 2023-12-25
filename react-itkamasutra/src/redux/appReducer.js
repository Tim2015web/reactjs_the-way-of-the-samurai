import { getAuth } from "./authReducer";

const SET_INITIALIZED = 'SET-INITIALIZED';

let initialState = { initialized: false };

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_INITIALIZED: return { ...state, initialized: true }
    default: return state;
  };
};

export function setInitialized() { return { type: SET_INITIALIZED } };

export function initializeApp() {
  return (dispatch) => {
    let promise = dispatch(getAuth());
    Promise.all([promise])
      .then(() => {
        dispatch(setInitialized());
      });
  };
};