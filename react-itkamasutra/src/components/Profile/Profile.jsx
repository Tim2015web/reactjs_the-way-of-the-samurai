import styles from './Profile.module.scss';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { MyPostContainer } from './MyPosts/MyPostContainer';
import { Status } from './Status';
import { reduxForm } from 'redux-form';

export function Profile({ profile, changeTitle }) {
  const NewStatusReduxForm = reduxForm({ form: 'NewStatusForm' })(Status);
  function newStatus(values) { if (values.newTitle) changeTitle(values.newTitle) };
  return (
    <div className={styles.profile}>
      <ProfileInfo profile={profile} />
      <NewStatusReduxForm onSubmit={newStatus} title={profile?.title} />
      <MyPostContainer />
    </div>
  );
};