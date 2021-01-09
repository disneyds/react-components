import FriendListItem from './FriendListItem';
import s from './FriendList.module.css';
export default function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(item => (
        <li className={s.item} key={item.id}>
          <FriendListItem friend={item} />
        </li>
      ))}
    </ul>
  );
}
