import s from '../Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.stat}>
        {stats.map(stat => {
          return (
            <li
              key={stat.id}
              className={s.item}
              style={{
                backgroundColor: getRandomHexColor(),
              }}
            >
              <span className={s.label}>{stat.label}</span>
              <span className={s.percentage}>{stat.percentage + '%'}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
