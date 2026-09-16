import "../styles/about.css";

function About() {
  return (
    <section id="about" className="section about container">
      <h2>Обо мне</h2>
      <article className="about__content">
        <figure className="about__image-wrapper">
          <img
            src="src/images/about.jpeg"
            alt="Анна Аннушкина за работой"
            className="about__image"
          />
          <figcaption className="about__caption">Ваш фотограф</figcaption>
        </figure>
        <section className="about__text">
          <h3>Привет, я Аня!</h3>
          <p>
            Я фотограф, для которого камера — это способ остановить время. Моя
            главная цель — показать вашу настоящую красоту, без лишней
            наигранности и сложных поз.
          </p>
          <p>
            В свадебной съёмке я ценю искренность: счастливые слезы, крепкие
            объятия и свет закатного солнца. В портретах — индивидуальность и
            характер. А когда я снимаю природу, то стараюсь передать тишину и
            величие, которые так важно иногда услышать в шумном мире.
          </p>
          <p>Давайте создадим что-то красивое вместе.</p>
        </section>
      </article>
    </section>
  );
}

export default About;
