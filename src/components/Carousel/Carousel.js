import { useState } from 'react';
import Swipe from 'react-easy-swipe';
import './Carousel.css';
import Preloader from '../Preloader/Preloader';
import Button from '../Button/Button';
import { data, arrows } from '../../config/products';

export default function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleArrowClick = (evt, isLeft) => {
    if (evt.currentTarget) {
      // eslint-disable-next-line no-param-reassign
      isLeft = evt.currentTarget.classList.contains('carousel-arrow_left');
    }
    const newIndex = currentIndex + (isLeft ? -1 : 1);
    if (newIndex <= data.length - 1) {
      setCurrentIndex(newIndex < 0 ? 0 : newIndex);
      setIsLoading(true);
    }
  };

  return (
    <>
      <ul className="carousel">
        <button
          className="carousel-arrow carousel-arrow_left"
          type="button"
          alt="left slider arrow"
          onClick={handleArrowClick}
          style={{ backgroundImage: `url(${currentIndex > 0 ? arrows.left : arrows.leftInactive})` }}
        />
        <Preloader isLoading={isLoading} location="carousel" />
        {props.products.slice(currentIndex, currentIndex + 1).map((product) => (
          <Swipe
            key={product.id}
            onSwipeRight={(evt) => handleArrowClick(evt, false)}
            onSwipeLeft={(evt) => handleArrowClick(evt, true)}
            onSwipeMove={() => true}
          >
            <li key={product.id} className="carousel-item">
              <img
                className="carousel-item__image"
                alt="robot product discussed in each card"
                src={data[currentIndex].image}
                onLoad={() =>
                  setTimeout(() => {
                    setIsLoading(false);
                  }, 200)
                }
              />
              <div className="carousel-item__details">
                <h3 className="carousel-item__title">{data[currentIndex].title}</h3>
                <ul className="carousel-item__specs">
                  {Object.entries(product.specs).map(([category, value]) => (
                    <li key={`${product.id}${category}${value}`} className="carousel-item__spec">
                      <span className="carousel-item__spec-type">{category}</span>
                      {value}
                    </li>
                  ))}
                </ul>
                <Button
                  className="carousel-item__button"
                  id="carousel"
                  style={{ background: 'black' }}
                  onClick={props.onClick}
                />
                <div className="carousel-item__details">
                  <h3 className="carousel-item__title">{data[currentIndex].title}</h3>
                  <ul className="carousel-item__specs">
                    {Object.entries(product.specs).map(([category, value]) => (
                      <li key={`${product.id}${category}${value}`} className="carousel-item__spec">
                        <span className="carousel-item__spec-type">{category}</span>
                        {value}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="carousel-item__button"
                    id="carousel"
                    style={{ background: 'black' }}
                    onClick={props.onClick}
                  />
                </div>
              </div>
            </li>
          </Swipe>
        ))}
        <button
          className="carousel-arrow carousel-arrow_right"
          type="button"
          alt="right slider arrow"
          onClick={handleArrowClick}
          style={{
            backgroundImage: `url(${currentIndex < data.length - 1 ? arrows.right : arrows.rightInactive})`,
          }}
        />
      </ul>
    </>
  );
}
