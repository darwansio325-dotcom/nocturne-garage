import hero from "../assets/images/hero.jpg.webp";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-text">

        <h2>Personalización Automotriz Premium</h2>

        <p>
          Especialistas en sistemas Wig Wag,
          radios multimedia, sombra dinámica,
          cámaras de reversa y exploradoras LED.
        </p>

        <button>Ver Servicios</button>

      </div>

      <div className="hero-image">

        <img src={hero} alt="Carro personalizado" />

      </div>

    </section>
  );
}

export default Hero;