import PropTypes from 'prop-types';
import { Fragment } from 'react';
import s from './FriendList.module.css';
import defoultAvatar from '../../data/defoultAvatar.png';

export default function FriendListItem({ friend }) {
  const { isOnline, avatar = defoultAvatar, name = 'Unknown' } = friend;
  return (
    <Fragment>
      <span className={isOnline ? s.online : s.offline}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </Fragment>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string,
    name: PropTypes.string,
  }),
};
