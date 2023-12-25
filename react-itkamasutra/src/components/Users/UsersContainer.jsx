import React from 'react';
import { Users } from './Users';
import { connect } from "react-redux";
import { setCurrentPage, getUsers, follow } from "../../redux/usersReducer";
import { PreLoader } from '../common/PreLoader/PreLoader';
import { compose } from '@reduxjs/toolkit';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersListCount, getUsersList } from '../../redux/usersSelectors';

class UsersContainer extends React.Component {
  componentDidMount() { this.props.getUsers(this.props.currentPage, this.props.pageSize); };
  spanClick(currentPage) { this.props.getUsers(currentPage, this.props.pageSize); };

  render() {
    return (
      <>
        {this.props.isFetching ? <PreLoader /> : null}
        <Users
          totalUsersListCount={this.props.totalUsersListCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          spanClick={this.spanClick.bind(this)}
          usersList={this.props.usersList}
          toggleFollowingInProgress={this.props.toggleFollowingInProgress}
          follow={this.props.follow}
        />
      </>
    );
  };
}

function mapStateToProps(state) {
  return {
    usersList: getUsersList(state),
    pageSize: getPageSize(state),
    totalUsersListCount: getTotalUsersListCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
};

export default compose(connect(mapStateToProps, { setCurrentPage, getUsers, follow }))(UsersContainer);