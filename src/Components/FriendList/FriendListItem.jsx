import { Fragment } from 'react';

export default function FriendListItem({ friend }) {
  const { isOnline, avatar, name } = friend;
  return (
    <Fragment>
      <span className="status">{isOnline ? 'online' : 'offline'}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </Fragment>
  );
}
