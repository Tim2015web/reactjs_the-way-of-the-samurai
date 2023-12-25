import styles from './Messages.module.scss';

export function Dialog({ dialogData }) {
  return (
    <>
      {dialogData.map(item => <div key={item.id}  className={styles.item}><p>{item.message}</p></div>)}
    </>
  );
}