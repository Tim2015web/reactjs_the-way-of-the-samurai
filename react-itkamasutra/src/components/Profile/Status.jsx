import styles from './Profile.module.scss';
import { Field } from 'redux-form';
import { useEffect, useState } from 'react';

export function Status(props) {

  const [editMode, setEditMode] = useState(true);
  const [status, setStatus] = useState(props.title);

  useEffect(() => { setStatus(props.title) }, [props.title]);

  function handleTitleClick() { setEditMode(false) };

  function handleBlur() {
    setEditMode(true);
    props.handleSubmit();
  };

  return (
    <form className={styles.status} onSubmit={props.handleSubmit}>
      <h3>Status:</h3>
      {editMode
        ? (<p onClick={handleTitleClick}>{status}</p>)
        : (<Field component='input' name='newTitle' placeholder={status} onBlur={handleBlur} />)}
    </form>
  );
};
