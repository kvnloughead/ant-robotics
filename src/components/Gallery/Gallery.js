import { useState } from 'react';
import Swipe from 'react-easy-swipe';
import './Gallery.css';
import Preloader from '../Preloader/Preloader';
import { arrows } from '../../config/gallery';

function Gallery({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleArrowClick = (evt, isLeft) => {
    if (evt.currentTarget) {
      // eslint-disable-next-line no-param-reassign
      isLeft = evt.currentTarget.classList.contains('arrow-button_left');
    }
    const newIndex = currentIndex + (isLeft ? -1 : 1);
    if (newIndex >= 0 && newIndex <= items.length - 1) {
      setCurrentIndex(newIndex < 0 ? 0 : newIndex);
      setIsLoading(true);
    }
    return true;
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
          <Swipe
            onSwipeRight={(evt) => handleArrowClick(evt, false)}
            onSwipeLeft={(evt) => handleArrowClick(evt, true)}
            onSwipeMove={() => true}
          >
            <img
              className={`gallery__image ${isLoading ? 'gallery__image_loading' : ''}`}
              src={items[currentIndex].image}
              alt={items[currentIndex].text}
              onLoad={() =>
                setTimeout(() => {
                  setIsLoading(false);
                }, 200)
              }
            />
          </Swipe>
          <Preloader isLoading={isLoading} />
          <button
            className="arrow-button arrow-button_right clickable"
            type="button"
            aria-label="next-image"
            onClick={handleArrowClick}
            style={{
              backgroundImage: `url(${currentIndex < items.length - 1 ? arrows.right : arrows.rightInactive})`,
            }}
          />
        </div>
        <figcaption className="gallery__text">{items[currentIndex].text}</figcaption>
      </figure>
    </>
  );
}

export default Gallery;
