import { usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';

let initialState = {
  postData: [
    { id: 0, text: 'Post 1', likesCount: 0 },
    { id: 1, text: 'Post 2', likesCount: 10 },
    { id: 2, text: 'Post 3', likesCount: 20 },
    { id: 3, text: 'Post 4', likesCount: 30 },
    { id: 4, text: 'Post 5', likesCount: 40 }
  ],
  profile: null
};

export function profileReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      let newPost = { id: state.postData.length, text: action.newPostText, likesCount: 0 };
      return { ...state, postData: [...state.postData, newPost], newPostText: '' };
    case SET_USER_PROFILE: return { ...state, profile: action.profile };
    default: return state;
  }
};

export function addPostActionCreator(newPostText) { return { type: ADD_POST, newPostText } };
export function setUserProfile(profile) { return { type: SET_USER_PROFILE, profile } };

export function getProfile() {
  return async function (dispatch) {
    const match = window.location.pathname.match(/\/user(\d+)/);
    const userId = match ? parseInt(match[1], 10) : 0;
    let response = await usersAPI.getProfile(userId);  
    dispatch(setUserProfile(response));
  }
};