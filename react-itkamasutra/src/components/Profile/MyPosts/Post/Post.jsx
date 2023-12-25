import styles from '../../Profile.module.scss';

export function Post({ avatar, text, likesCount }) {
  return (
    <div className={styles.post}>
      <img src={avatar} alt="Avatar" />
      <p>{text}</p>
      <p>Like: <span>{likesCount}</span></p>
    </div>
  );
}