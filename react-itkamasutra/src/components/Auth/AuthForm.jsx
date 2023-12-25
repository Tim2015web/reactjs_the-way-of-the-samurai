import { required } from '../../utils/validators';
import { Input } from '../common/FormsControls/FormsControls';
import styles from './Auth.module.scss';
import { Field } from 'redux-form';

export function AuthForm({ handleSubmit, error }) {
  return (
    <form className={styles.authForm} onSubmit={handleSubmit}>
      <div>
        <label htmlFor='login'>Логин:</label>
        <Field id='login' placeholder={'Логин'} name={'login'} component={Input} autoComplete={'username'} validate={required} />
      </div>

      <div>
        <label htmlFor='password'>Пароль:</label>
        <Field id='password' placeholder={'Пароль'} name={'password'} component={Input} type={'password'} autoComplete={'current-password'} validate={required} />
      </div>

      <div>
        <Field id="rememberMeCheckbox" component={'input'} type={'checkbox'} name={"rememberMe"} />
        <label htmlFor="rememberMeCheckbox">Запомнить меня</label>
      </div>
      {error && <div className={styles.formError}><p>{error}</p></div>}
      <button type="submit">Войти</button>
    </form>
  );
};