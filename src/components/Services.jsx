import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section>
      <h2>Nuestros Servicios</h2>
        <div className="cards">
      <ServiceCard
        emoji="🚨"
        title="Sistema Wig Wag"
        description="Instalación y configuración de sistemas de luces intermitentes para vehículos."
      />

      <ServiceCard
        emoji="📻"
        title="Radios Multimedia"
        description="Instalación de radios con pantalla, Bluetooth y Android Auto."
      />

      <ServiceCard
        emoji="🌈"
        title="Sombra Dinámica"
        description="Instalación de sistemas de iluminación ambiental para el interior del vehículo."
      />

      <ServiceCard
        emoji="📷"
        title="Cámaras de Reversa"
        description="Instalación de cámaras para mejorar la seguridad al estacionar."
      />

      <ServiceCard
        emoji="💡"
        title="Exploradoras LED"
        description="Instalación de exploradoras LED para una mejor iluminación en carretera."
      />
        </div>
    </section>
  );
}

export default Services;