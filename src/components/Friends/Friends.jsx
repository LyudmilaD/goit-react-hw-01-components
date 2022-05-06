import PropTypes from 'prop-types';
import s from './Friends.module.css';
import { FriendListItem } from './FriendListItem'


export function FriendList({ friends }) {
    return (
        <section>
      <ul className={s.list}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        ))}
      </ul>
    </section>
  );
};


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

