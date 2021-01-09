import PropTypes from 'prop-types';
import { Fragment } from 'react';
import s from './FriendList.module.css';

export default function FriendListItem({ friend }) {
  const { isOnline, avatar, name } = friend;
  return (
    <Fragment>
      <span
        className={s.status}
        style={
          isOnline
            ? { backgroundColor: '#48b14b' }
            : { backgroundColor: '#ff5159' }
        }
      ></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </Fragment>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
