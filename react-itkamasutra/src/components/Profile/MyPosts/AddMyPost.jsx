import { Field } from 'redux-form';
import styles from '../Profile.module.scss';
import { required, maxLengthCreator } from './../../../utils/validators';
import { TextArea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

export function AddMyPost({ handleSubmit }) {



  return (
    <form className={styles.newPost} onSubmit={handleSubmit}>
      <h3>New Post</h3>

      <Field
        component={TextArea}
        name='newPostText'
        placeholder='Enter text post'
        validate={[required, maxLength10]}
      />

      <button>Send</button>
    </form>
  );
};