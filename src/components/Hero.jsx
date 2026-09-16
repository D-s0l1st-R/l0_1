import "../styles/hero.css";

function Hero() {
  return (
    <section id="hero" className="hero section container">
      <h1 className="hero__title">Анна Аннушкина</h1>
      <p className="hero__subtitle">Фотограф, который ловит свет и эмоции</p>
      <p className="hero__description">
        Профессиональная портретная и свадебная съёмка, а также художественные
        пейзажи. Сохраняю моменты, которые хочется пересматривать вечно.
      </p>
      <a href="#contact" className="hero__cta button">
        Записаться на съёмку
      </a>
    </section>
  );
}

export default Hero;
