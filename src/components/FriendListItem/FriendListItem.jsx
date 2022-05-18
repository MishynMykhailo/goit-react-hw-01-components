import { Fragment } from 'react';
import PropTypes from 'prop-types';
import s from '../FriendListItem/FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={s.div}>
      <span
        className={s.status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      >
        {isOnline}
      </span>
      <img className={s.avatar} src={avatar} alt={name + 'avatar'} width="48" />
      <p className={s.name}>{name}</p>
    </div>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
