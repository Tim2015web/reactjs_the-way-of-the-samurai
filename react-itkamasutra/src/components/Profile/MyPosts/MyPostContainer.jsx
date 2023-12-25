import { addPostActionCreator } from '../../../redux/profileReducer';
import { MyPosts } from './MyPost';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return { postData: state.profilePage.postData, newPostText: state.profilePage.newPostText };
};

function mapDispatchToProps(dispatch) {
  return { addPost: (newPostText) => { dispatch(addPostActionCreator(newPostText)) } };
};

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);