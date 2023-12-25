import styles from './Header.module.scss';
import logo from '../../assets/images/logotype.svg';
import { NavLink } from 'react-router-dom';

export function Header({ isAuth, login, logout }) {
  return (
    <header className={styles.header}>
      <NavLink to="/"><img src={logo} alt="Logotype company" /></NavLink>
      <NavLink to="/">Social Media</NavLink>
      {isAuth
        ? <div className={styles.auth}><p>{login}</p><button onClick={logout}>Log Out</button></div>
        : <NavLink to="/auth" className={styles.auth}>Sign In</NavLink>
      }
    </header>
  );
};