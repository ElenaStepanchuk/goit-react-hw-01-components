import PropTypes from 'prop-types';
import css from '../task3/FriendList.module.css';
import defaultPhoto from '../task1/default-photo.png';
import FriendListItem from '../task3/FriendListItem';
export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar ?? defaultPhoto}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}
FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
  }),),
}
