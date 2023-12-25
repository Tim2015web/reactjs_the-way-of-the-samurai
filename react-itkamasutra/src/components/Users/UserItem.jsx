import styles from './Users.module.scss';
import { NavLink } from 'react-router-dom';

export function UsersItem({ id, avatar, status, followingInProgress, follow, name, country, title, city }) {
  return (
    <div className={styles.usersItem}>
      <div className={styles.avatarWrap}>
        <NavLink to={'/profile/user' + id}>
          <img src={avatar} alt='Avatar' />
        </NavLink>
        {status
          ? <button
            disabled={followingInProgress}
            onClick={() => follow(id, false)}>UnFollow</button>
          : <button
            disabled={followingInProgress}
            onClick={() => follow(id, true)}>Follow</button>}
      </div>
      <div className={styles.infoWrap}>
        <p className={styles.name}>{name}</p>
        <p className={styles.country}>{country},</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.city}>{city}</p>
      </div>
    </div>
  );
}
