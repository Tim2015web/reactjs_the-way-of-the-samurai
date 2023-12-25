import styles from './Messages.module.scss';
import { NavLink } from 'react-router-dom';

const setActive = Navbar => Navbar.isActive ? styles.active : styles.item;

export function Users(props) {
  return (
    <>
      {props.usersData.map(item => {
        return (
          <li key={item.id} className={styles.item}>
            <NavLink to={'/messages/' + item.id} className={setActive}>{item.name}</NavLink>
          </li>
        );
      })}
    </>
  );
}