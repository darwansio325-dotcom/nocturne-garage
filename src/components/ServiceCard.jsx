function ServiceCard({ emoji, title, description }) {
  return (
    <div>
      <h3>{emoji}</h3>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;