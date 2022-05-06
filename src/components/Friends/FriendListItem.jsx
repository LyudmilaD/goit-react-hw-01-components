import PropTypes from 'prop-types';
import s from './Friends.module.css'

export function FriendListItem ({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      <span
        className={isOnline ? s.statusOnline : s.statusOffline}
      ></span>
      <img className={s.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}
