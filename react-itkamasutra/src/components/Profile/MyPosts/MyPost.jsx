import styles from '../Profile.module.scss';
import { Post } from './Post/Post';
import { AddMyPost } from './AddMyPost';
import { reduxForm } from 'redux-form';

export function MyPosts({ addPost, postData, newPostText }) {
  const AddMyPostReduxForm = reduxForm({ form: 'addMyPostForm' })(AddMyPost);
  function addMyPost(values) { addPost(values.newPostText) };
  return (
    <div className={styles.myPosts}>
      <h2>My posts</h2>
      <AddMyPostReduxForm onSubmit={addMyPost} newPostText={newPostText} />
      <div className={styles.itemWrap}>
        {postData.map(item => <Post
          avatar='https://i.pravatar.cc/300?img=12'
          key={item.id}
          text={item.text}
          likesCount={item.likesCount} />)}
      </div>
    </div>
  );
}