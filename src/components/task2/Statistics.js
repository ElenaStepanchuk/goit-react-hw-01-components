import PropTypes from 'prop-types';

export default function Statistics({title, stats}) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map((stat) => {
          return (<li key={stat.id} className="item">
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>)
              
        })}
  </ul>
    </section >
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  ststs: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),),
}
