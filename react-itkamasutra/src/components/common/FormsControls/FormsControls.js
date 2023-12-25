import styles from './FormsControls.module.scss';

export function TextArea({ id, meta, ...props }) {
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
      <textarea {...props.input} id={id} />
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export function Input({ id, meta, ...props }) {
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
      <input {...props.input} id={id} />
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};