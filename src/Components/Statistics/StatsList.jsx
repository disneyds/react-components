import s from './Statistics.module.css';
export default function StatsList({ items }) {
  return (
    <ul className={s.statsList}>
      {items.map(item => {
        return (
          <li
            className={s.item}
            style={{ backgroundColor: rundomColor() }}
            key={item.id}
          >
            <span className={s.lable}>{item.label}</span>
            <span className={s.percentage}>{item.percentage}%</span>
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
