function ServiceCard({ emoji, title, description }) {
  return (
    <div className="card">
      <h2>{emoji}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;