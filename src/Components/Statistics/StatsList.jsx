import s from './Statistics.module.css';
export default function StatsList({ items }) {
  return (
    <ul className={s.statsList}>
      {items.map(({ id, label, percentage = 0 }) => {
        return (
          <li
            className={s.item}
            style={{ backgroundColor: rundomColor() }}
            key={id}
          >
            <span className={s.lable}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        );
      })}
    </ul>
  );
}

function rundomColor() {
  return (
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  );
}
