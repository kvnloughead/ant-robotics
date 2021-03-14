import { useState } from 'react';
import './Gallery.css';
import { galleryItems } from '../../config/gallery';

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleArrowClick = (evt) => {
    const isLeftArrow = evt.currentTarget.classList.contains('arrow-button_left');
    const newIndex = currentIndex + (isLeftArrow ? -1 : 1);
    if (newIndex <= galleryItems.length - 1) {
      setCurrentIndex(newIndex < 0 ? 0 : newIndex);
    }
    // if (newIndex < 0) setCurrentIndex(0);
    // if (newIndex >= galleryItems.length) setCurrentIndex(galleryItems.length - 1);
    // setCurrentIndex(currentIndex + (isLeftArrow ? -1 : 1));
  };

  return (
    <>
      <figure className="gallery">
        <div className="gallery__carousel">
          <button
            className="arrow-button arrow-button_left"
            type="button"
            aria-label="previous-image"
            onClick={handleArrowClick}
          />
          <img
            className="gallery__image"
            src={galleryItems[currentIndex].image}
            alt={galleryItems[currentIndex].text}
          />
          <button
            className="arrow-button arrow-button_right"
            type="button"
            aria-label="next-image"
            onClick={handleArrowClick}
          />
        </div>
        <figcaption className="gallery__text">{galleryItems[currentIndex].text}</figcaption>
      </figure>
      {/* {galleryItems.map((item) => (
        <figure>
          <img src={item.image} alt={item.text} />
          <figcaption>{item.text}</figcaption>
        </figure>
      ))} */}
    </>
  );
}

export default Gallery;
