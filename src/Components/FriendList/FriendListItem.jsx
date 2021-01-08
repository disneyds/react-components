import PropTypes from 'prop-types';
import { Fragment } from 'react';

export default function FriendListItem({ friend }) {
  const { isOnline, avatar, name } = friend;
  return (
    <Fragment>
      <span
        className="status"
        style={
          isOnline ? { backgroundColor: 'green' } : { backgroundColor: 'red' }
        }
      >
        {isOnline ? 'online' : 'offline'}
      </span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </Fragment>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
