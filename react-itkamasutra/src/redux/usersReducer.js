import { usersAPI } from "../api/api";

const FOLOW = 'FOLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

let initialState = {
  usersList: [],
  pageSize: 10,
  totalUsersListCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
};

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FOLOW:
      return {
        ...state,
        usersList: state.usersList.map(item => {
          if (item.id === action.userId) { return { ...item, status: action.status } }
          return item;
        })
      }
    case SET_USERS:
      return { ...state, usersList: [...action.usersList] }
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case SET_TOTAL_COUNT:
      return { ...state, totalUsersListCount: action.totalUsersListCount }
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    default: return state;
  };
};

export function followSuccess(userId, status) { return { type: FOLOW, userId, status } };
export function setUsers(usersList) { return { type: SET_USERS, usersList } };
export function setCurrentPage(currentPage) { return { type: SET_CURRENT_PAGE, currentPage } };
export function setTotalUsersCount(totalUsersListCount) { return { type: SET_TOTAL_COUNT, totalUsersListCount } };
export function toggleIsFetching(isFetching) { return { type: TOGGLE_IS_FETCHING, isFetching } };
export function toggleFollowingInProgress(followingInProgress, userId) { return { type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, userId } };

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  let response = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(setCurrentPage(currentPage));
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(response.usersList));
  dispatch(setTotalUsersCount(response.totalCount));
};

export const follow = (UserId, status) => async (dispatch) => {
  dispatch(toggleFollowingInProgress(true, UserId));
  await usersAPI.postFollow(UserId, status);
  dispatch(followSuccess(UserId, status));
  dispatch(toggleFollowingInProgress(false, UserId));
};