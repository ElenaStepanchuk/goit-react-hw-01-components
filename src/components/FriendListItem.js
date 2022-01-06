import css from './FriendList.module.css';
import PropTypes from 'prop-types';
export default function FriendListItem({ isOnline, avatar, name }) {
  const statusFriend = [css.status];
  isOnline ? statusFriend.push(css.online) : statusFriend.push(css.offline);
  return (
    <li className={css.item}>
      <span className={statusFriend.join(' ')}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
