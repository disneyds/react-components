import FriendListItem from './FriendListItem';
export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(item => (
        <li className="item" key={item.id}>
          <FriendListItem friend={item} />
        </li>
      ))}
    </ul>
  );
}
