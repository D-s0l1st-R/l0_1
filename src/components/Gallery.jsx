import React, { useState } from "react";
import "../styles/gallery.css";

const photos = [
  {
    id: 1,
    src: "src/images/portrait_1.jpg",
    category: "portrait",
    alt: "Портретная съемка 1",
  },
  {
    id: 2,
    src: "src/images/wedding_1.jpg",
    category: "wedding",
    alt: "Свадебная съемка 1",
  },
  {
    id: 3,
    src: "src/images/nature_1.jpg",
    category: "nature",
    alt: "Природа 1",
  },
  {
    id: 4,
    src: "src/images/portrait_2.jpg",
    category: "portrait",
    alt: "Портретная съемка 2",
  },
  {
    id: 5,
    src: "src/images/wedding_2.jpg",
    category: "wedding",
    alt: "Свадебная съемка 2",
  },
  {
    id: 6,
    src: "src/images/nature_2.jpg",
    category: "nature",
    alt: "Природа 2",
  },
];

const categories = [
  { id: "all", label: "Все" },
  { id: "portrait", label: "Портрет" },
  { id: "wedding", label: "Свадьба" },
  { id: "nature", label: "Природа" },
];

function Gallery() {
  const [filter, setFilter] = useState("all");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredPhotos =
    filter === "all"
      ? photos
      : photos.filter((photo) => photo.category === filter);

  return (
    <section id="gallery" className="section gallery container">
      <h2>Портфолио</h2>
      <p className="gallery__intro">
        Здесь нет случайных кадров. Каждая фотография — это история любви,
        момент задумчивости или дыхание гор.
      </p>

      <nav className="gallery__filters">
        <ul className="gallery__filter-list">
          {categories.map((cat) => (
            <li key={cat.id}>
              <button
                className={`gallery__filter-btn ${filter === cat.id ? "active" : ""}`}
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <ul className="gallery__grid">
        {filteredPhotos.map((photo) => (
          <li
            key={photo.id}
            className="gallery__item"
            onClick={() => setSelectedPhoto(photo)}
          >
            <figure className="gallery__figure">
              <img
                src={photo.src}
                alt={photo.alt}
                className="gallery__image"
                loading="lazy"
              />
              <figcaption className="gallery__caption">{photo.alt}</figcaption>
            </figure>
          </li>
        ))}
      </ul>

      {selectedPhoto && (
        <dialog open className="modal" onClick={() => setSelectedPhoto(null)}>
          <article
            className="modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal__close"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Закрыть"
            >
              &times;
            </button>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="modal__image"
            />
            <p className="modal__caption">{selectedPhoto.alt}</p>
          </article>
        </dialog>
      )}
    </section>
  );
}

export default Gallery;
