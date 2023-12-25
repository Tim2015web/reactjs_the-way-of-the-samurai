import { Field } from 'redux-form';
import styles from './Messages.module.scss';
import { TextArea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators';

const maxLength15 = maxLengthCreator(15);

export function AddMessagesForm({ handleSubmit }) {
  return (
    <form className={styles.newMsgWrap} onSubmit={handleSubmit}>
      <div>
        <Field component={TextArea} name='newMessageBody' placeholder='Enter your message' validate={[required, maxLength15]} />
      </div>
      <div><button>Send</button></div>
    </form>
  );
};