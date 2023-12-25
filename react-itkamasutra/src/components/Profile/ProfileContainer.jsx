import { useEffect } from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { getProfile } from "./../../redux/profileReducer";
import { withAuthRedirect } from "../../hoc/AuthRedirect";
import { compose } from "@reduxjs/toolkit";
import { usersAPI } from "../../api/api";

function ProfileContainer({ profile, getProfile }) {
  useEffect(() => { getProfile(); }, [getProfile]);
  return <Profile profile={profile} changeTitle={changeTitle} />;
  function changeTitle(newTitle) {
    const match = window.location.pathname.match(/\/user(\d+)/);
    const userId = match ? parseInt(match[1], 10) : 0;
    if (newTitle !== '') { usersAPI.postTitle(userId, newTitle) };
  };
};

function mapStateToProps(state) { return { profile: state.profilePage.profile }; }

export default compose(
  connect(mapStateToProps, { getProfile }), withAuthRedirect)(ProfileContainer);