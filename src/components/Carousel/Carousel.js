import { useState } from 'react';
import './Carousel.css';
import Button from '../Button/Button';
import Form from '../Form/Form';
import { products, arrows } from '../../config/products';

export default function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleArrowClick = (evt) => {
    const isLeftArrow = evt.currentTarget.classList.contains('carousel-arrow_left');
    const newIndex = currentIndex + (isLeftArrow ? -1 : 1);
    if (newIndex <= products.length - 1) {
      setCurrentIndex(newIndex < 0 ? 0 : newIndex);
    }
  };

  function openForm() {
    setIsFormOpen(true);
    Form();
  }

  function closeForm() {
    setIsFormOpen(false);
  }

  return (
    <>
      <ul className="carousel">
        <button className="carousel-arrow carousel-arrow_left" type="button" alt="left slider arrow" 
          onClick={handleArrowClick}
          style={{ backgroundImage: `url(${currentIndex > 0 ? arrows.left : arrows.leftInactive})` }}
        />
        {props.products.map((product) => (
          <li className="carousel-item">
            <img className="carousel-item__image" alt="robot product discussed in each card"
              src={products[currentIndex].image}
            />
            <div className="carousel-item__details">
              <h3 className="carousel-item__title">{products[currentIndex].title}</h3>
              <ul className="carousel-item__specs">
                {Object.entries(product.data).map(([category, value]) => (
                  <li className="carousel-item__spec">
                    <span className="carousel-item__spec-type">{products[currentIndex].data[category]}</span>
                    {products[currentIndex].data[value]}
                  </li>
                ))}
              </ul>
              <Button className="carousel-item__button" label="Get more info" id="carousel" style={{ background: 'black' }}
                onClick={openForm}
                isOpen={isFormOpen}
                onClose={closeForm}
              />
            </div>
          </li>
        ))}
        <button className="carousel-arrow carousel-arrow_right" type="button" alt="right slider arrow"
          onClick={handleArrowClick}
          style={{ backgroundImage: `url(${currentIndex < products.length - 1 ? arrows.right : arrows.rightInactive})` }}
        />
      </ul>
    </>
  );
}

