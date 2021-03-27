import { useState } from 'react';
import './Gallery.css';
import { galleryItems, arrows } from '../../config/gallery';

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleArrowClick = (evt) => {
    const isLeftArrow = evt.currentTarget.classList.contains('arrow-button_left');
    const newIndex = currentIndex + (isLeftArrow ? -1 : 1);
    if (newIndex <= galleryItems.length - 1) {
      setCurrentIndex(newIndex < 0 ? 0 : newIndex);
    }
  };

  return (
    <>
      <figure className="gallery">
        <div className="gallery__carousel">
          <button
            className="arrow-button arrow-button_left clickable"
            type="button"
            aria-label="previous-image"
            onClick={handleArrowClick}
            style={{ backgroundImage: `url(${currentIndex > 0 ? arrows.left : arrows.leftInactive})` }}
          />
          <img
            className="gallery__image"
            src={galleryItems[currentIndex].image}
            alt={galleryItems[currentIndex].text}
          />
          <button
            className="arrow-button arrow-button_right clickable"
            type="button"
            aria-label="next-image"
            onClick={handleArrowClick}
            style={{
              backgroundImage: `url(${currentIndex < galleryItems.length - 1 ? arrows.right : arrows.rightInactive})`,
            }}
          />
        </div>
        <figcaption className="gallery__text">{galleryItems[currentIndex].text}</figcaption>
      </figure>
    </>
  );
}

export default Gallery;
