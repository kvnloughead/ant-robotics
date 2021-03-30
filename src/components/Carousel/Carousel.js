// import { useState } from 'react';
import './Carousel.css';
import Button from '../Button/Button';
// import { products } from '../../config/products';

export default function Carousel(props) {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const handleArrowClick = (evt) => {
  //   const isLeftArrow = evt.currentTarget.classList.contains('carousel-arrow_left');
  //   const newIndex = currentIndex + (isLeftArrow ? -1 : 1);
  //   if (newIndex <= products.length - 1) {
  //     setCurrentIndex(newIndex < 0 ? 0 : newIndex);
  //   }
  // };

  return (
    <>
      <ul className="carousel">
        <img
          className="carousel-arrow carousel-arrow_left"
          src="../../images/products/product_carousel-arrow_left.svg"
          alt="left slider arrow"
        />
        {/* onClick={handleArrowClick} */}
        {props.products.map((product) => (
          <li className="carousel-item">
            <img
              className="carousel-item__image"
              src="../../images/products/product_1-otto.svg"
              alt="robot product discussed in each card"
            />
            {/* src={product.image} with map OR src={products[currentIndex].image with state} */}
            <div className="carousel-item__details">
              <h3 className="carousel-item__title">{product.title}</h3>
              <ul className="carousel-item__specs">
                {Object.entries(product.data).map(([key, value]) => (
                  <li className="carousel-item__spec">
                    <span className="carousel-item__spec-type">{key}</span>
                    {value}
                  </li>
                ))}
              </ul>
              <Button
                className="carousel-item__button"
                label="Get more info"
                id="carousel"
                style={{ background: 'black' }}
              />
            </div>
          </li>
        ))}
        <img
          className="carousel-arrow carousel-arrow_right"
          src="../../images/products/product_carousel-arrow_left.svg"
          alt="right slider arrow"
        />
      </ul>
    </>
  );
}
