import PropTypes from 'prop-types';
import style from './Profile.module.css';
export default function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt="Аватар пользователя" className={style.avatar} />
        <p className={style.name}>{name}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li className={style.statItem}>
          <span className={style.lable}>Followers</span>
          <span className={style.quantity}>{stats.followers}</span>
        </li>
        <li className={style.statItem}>
          <span className={style.lable}>Views</span>
          <span className={style.quantity}>{stats.views}</span>
        </li>
        <li className={style.statItem}>
          <span className={style.lable}>Likes</span>
          <span className={style.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  tag: PropTypes.string,
  avatar: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
