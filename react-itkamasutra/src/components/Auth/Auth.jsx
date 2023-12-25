import styles from './Auth.module.scss';
import { reduxForm } from 'redux-form';
import { AuthForm } from './AuthForm';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer';
import { Navigate } from 'react-router-dom';

const LoginReduxForm = reduxForm({ form: 'auth' })(AuthForm);

function Auth({ login, isAuth }) {
  function onSubmit(values) {
    login(values.login, values.password, values.rememberMe);
  };
  if (isAuth) return <Navigate to='/profile' />;
  return (
    <div className={styles.auth}>
      <h2>Authorization</h2>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

function mapStateToProps(state) { return { isAuth: state.auth.isAuth } };
export default connect(mapStateToProps, { login })(Auth);