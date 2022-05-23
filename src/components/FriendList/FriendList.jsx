import s from '../FriendList/FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendList/FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(({ id, isOnline, avatar, name }) => {
        return (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
