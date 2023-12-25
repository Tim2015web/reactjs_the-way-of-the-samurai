export function getUsersList(state) { return state.usersPage.usersList };
export function getPageSize(state) { return state.usersPage.pageSize };
export function getTotalUsersListCount(state) { return state.usersPage.totalUsersListCount };
export function getCurrentPage(state) { return state.usersPage.currentPage };
export function getIsFetching(state) { return state.usersPage.isFetching };
export function getFollowingInProgress(state) { return state.usersPage.followingInProgress };