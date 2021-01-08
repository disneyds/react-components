import StatsList from './StatsList';

export default function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <StatsList items={stats} />
    </section>
  );
}
