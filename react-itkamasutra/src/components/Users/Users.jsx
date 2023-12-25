import styles from './Users.module.scss';
import { UsersItem } from './UserItem';
import { useState } from 'react';

export function Users({ totalUsersListCount, pageSize, currentPage, follow, usersList, spanClick, portionSize = 5 }) {
  let pageCount = Math.ceil(totalUsersListCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pageCount; i++) { pages.push(i) }


  let portionCount = Math.ceil(pageCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;



  return (
    <div className={styles.users}>
      <h2>Users</h2>

      <div className={styles.pageWrap}>
        {portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button>}

        {pages.filter(item => item >= leftPortionPageNumber && item <= rightPortionPageNumber)
          .map(item => (
            <span
              key={item}
              className={currentPage === item ? styles.active : ''}
              onClick={() => spanClick(item)}
            >{item}</span>
          ))}

        {portionCount > portionNumber && <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>}
      </div>

      <div className={styles.usersWrap}>
        {usersList.map(({ id, status, name, title, avatar, location }) => (<UsersItem key={id} id={id} status={status} name={name} title={title} avatar={avatar} country={location.country} city={location.city} follow={follow} />))}
      </div>
    </div>
  );
};







// {pages.map(item => (
//   <span
//     key={item}
//     className={currentPage === item ? styles.active : ''}
//     onClick={() => spanClick(item)}
//   >{item}</span>
// ))}
