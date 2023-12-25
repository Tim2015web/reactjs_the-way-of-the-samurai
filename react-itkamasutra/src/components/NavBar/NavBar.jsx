import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';
import { SideBar } from './SideBar';

const setActive = Navbar => Navbar.isActive ? styles.active : styles.item;

export function NavBar() {
  return (
    <nav className={styles.sidebar}>
      <ul className={styles.menu}>
        <li className={styles.item}><NavLink to="/profile" className={setActive}>Profile</NavLink></li>
        <li className={styles.item}><NavLink to="/messages" className={setActive}>Messages</NavLink></li>
        <li className={styles.item}><NavLink to="/news" className={setActive}>News</NavLink></li>
        <li className={styles.item}><NavLink to="/music" className={setActive}>Music</NavLink></li>
        <li className={styles.item}><NavLink to="/users" className={setActive}>Users</NavLink></li>
        <li className={styles.item}><NavLink to="/settings" className={setActive}>Settings</NavLink></li>
      </ul>

      <SideBar/>
    </nav>
  );
}