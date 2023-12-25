import styles from './Messages.module.scss';
import { Users } from './Users';
import { Dialog } from './Dialog';
import { AddMessagesForm } from './AddMessagesForm';
import { reduxForm } from 'redux-form';

const AddMessagesReduxForm = reduxForm({ form: 'dialogAddMessagesForm' })(AddMessagesForm);

export function Messages({ messagesPage, sendMessage }) {
  function addNewMessage(values) { sendMessage(values.newMessageBody) };
  return (
    <div className={styles.messages}>
      <h2>Messages</h2>
      <div className={styles.content}>
        <ul className={styles.usersWrap}>
          <Users usersData={messagesPage.usersData} />
        </ul>
        <div className={styles.dialogWrap}>
          <Dialog dialogData={messagesPage.dialogData} />
          <AddMessagesReduxForm onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
};