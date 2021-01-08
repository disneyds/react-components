export default function StatsList({ items }) {
  return (
    <ul className="stat-list">
      {items.map(item => {
        return (
          <li className="item" key={item.id}>
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}</span>
          </li>
        );
      })}
    </ul>
  );
}
