import { useState } from 'react';
import './Carousel.css';
import Button from '../Button/Button';
import { data, arrows } from '../../config/products';

export default function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleArrowClick = (evt) => {
    const isLeftArrow = evt.currentTarget.classList.contains('carousel-arrow_left');
    const newIndex = currentIndex + (isLeftArrow ? -1 : 1);
    if (newIndex <= data.length - 1) {
      setCurrentIndex(newIndex < 0 ? 0 : newIndex);
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
        {props.products.slice(currentIndex, currentIndex + 1).map((product) => (
          <li key={product.id} className="carousel-item">
            <img
              className="carousel-item__image"
              alt="robot product discussed in each card"
              src={data[currentIndex].image}
            />
            <div className="carousel-item__details">
              <h3 className="carousel-item__title">{data[currentIndex].title}</h3>
              <ul className="carousel-item__specs">
                {Object.entries(product.specs).map(([category, value]) => (
                  <li className="carousel-item__spec">
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
          </li>
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
