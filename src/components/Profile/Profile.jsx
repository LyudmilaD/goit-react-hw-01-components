import PropTypes from 'prop-types';
import s from "./Profile.module.css"

export function Profile({ avatar, username, tag, location, stats }) {
  const {views, followers, likes}=stats
    return (
      <div className={s.profile}>
      <h2 className={s.title}>Social network profile</h2>
      <div className={s.description}>
        <img className={s.avatar} src={avatar} alt="User avatar" />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}> {followers}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}> {views}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}> {likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes:PropTypes.number.isRequired
      }
    )  
}
