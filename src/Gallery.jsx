import "./gallery.css";
import Carousel from "./Carousel";

function Gallery() {
  return (
    <>
      <section id="gallery" className="block">
        <h2>Мои работы</h2>
        <p>
          Здесь нет случайных кадров. Каждая фотография — это история любви,
          момент задумчивости или дыхание гор.
        </p>
        <Carousel />
      </section>
    </>
  );
}

export default Gallery;
