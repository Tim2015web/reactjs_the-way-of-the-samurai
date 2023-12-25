import styles from '../Profile.module.scss';

import topImg from '../../../assets/images/header.jpg';
import { PreLoader } from '../../common/PreLoader/PreLoader';

export function ProfileInfo({ profile }) {
  if (!profile) { return <PreLoader /> }
  return (
    <div className={styles.profileInfo}>

      <div className={styles.imageWrap}>
        <img src={topImg} alt='Header' />
      </div>

      <div className={styles.infoWrap}>
        <div className={styles.avatarWrap}>
          <img src={profile.avatar} alt="Avatar" />
        </div>

        <div className={styles.descriptionWrap}>
          <p>{profile.name}</p>
          <p><span>Date of birth: </span>{profile.data}</p>
          <p><span>Education: </span>{profile.education}</p>
          <p><span>Web site: </span>{profile.website}</p>
        </div>
      </div>

    </div>
  );
}