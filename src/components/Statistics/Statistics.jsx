import PropTypes from 'prop-types';
import s from "./Statistics.module.css"

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export function Statistics({title, data}) {
    return (
        <section className={s.statistics}>
            {title && <h2 className={s.title}>{title}</h2>}

        <ul className={s.statList}>
        {data.map(({ id, label, percentage }) => (
            <li key={id}
            style={{backgroundColor: getRandomHexColor(),}}
            className={s.span}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
            </li>
        ))}
        </ul>
    </section>
    );
}
Statistics.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
         id:PropTypes.string.isRequired,
         label:PropTypes.string.isRequired,
         percentage:PropTypes.number.isRequired,
        }),
    ),
    title:PropTypes.string
}

