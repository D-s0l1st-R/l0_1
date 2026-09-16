import { useState } from 'react';
import './Carousel.css'

const images = [
  './src/images/nature_1.jpg',
  './src/images/nature_2.jpg',
  './src/images/portrait_1.jpg',
  './src/images/portrait_2.jpg',
  './src/images/wedding_1.jpg',
  './src/images/wedding_1.jpg',
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Переключение на следующий слайд
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Переключение на предыдущий слайд
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id='carousel'>
        <div id='base'>
            {/* Кнопка Назад */}
            <button onClick={prevSlide} className='button' style={{ left: 10 }}>
                ❮
            </button>

            {/* Слайд */}
            <img 
                src={images[currentIndex]} 
                alt={`Слайд ${currentIndex + 1}`} 
                className='image'
            />

            {/* Кнопка Вперед */}
            <button onClick={nextSlide} className='button' style={{ right: 10 }}>
                ❯
            </button>
        </div>

      {/* Индикаторы (точки) */}
      <div className='dotsContainer'>
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className='dot'
            style={{
              backgroundColor: currentIndex === index ? '#fff' : '#888',
            }}
          />
        ))}
      </div>
    </div>
  );
}
