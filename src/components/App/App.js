import './App.css';
import { useState, useCallback } from 'react';
import Carousel from '../Carousel/Carousel';
import Section from '../Section/Section';
import Gallery from '../Gallery/Gallery';
import { products } from '../../config/products';
import { galleryItems } from '../../config/gallery';
import CardList from '../CardList/CardList';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { benefits } from '../../config/benefits';
import { cardsWithImages } from '../../config/cards-with-images';
import { team } from '../../config/team';
import Banner from '../Banner/Banner';
import { htmlIds } from '../../config/nav-link';

function App() {
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const openModal = () => {
    setFormIsOpen(true);
  };

  const handleResize = () => {
    setWindowInnerWidth(window.innerWidth);
  };

  const resetForm = useCallback(
    (newValues = { email: '', password: '', message: '' }, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  const closeModal = (evt) => {
    evt.stopPropagation();
    if (evt.type === 'click' || evt.key === 'Escape') {
      setFormIsOpen(false);
      resetForm();
    }
  };

  const handleMenuIconClick = () => {
    setIsMobileMenuOpen(true);
  };

  const handleSubmit = () => {
    setFormIsOpen(false);
  };

  const handleChange = (event) => {
    const { target } = event;
    const { name } = target;
    const { value } = target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };

  return (
    <>
      <Form
        isOpen={formIsOpen}
        isValid={isValid}
        onClose={closeModal}
        onSubmit={handleSubmit}
        handleChange={handleChange}
        errors={errors}
        values={values}
      />
      <Header
        windowInnerWidth={windowInnerWidth}
        onResize={handleResize}
        isMobileMenuOpen={isMobileMenuOpen}
        onMenuIconClick={handleMenuIconClick}
      />
      <Section type="products" layout="vertical" htmlId={htmlIds.productsId}>
        <Carousel products={products} />
      </Section>
      <Section type="benefits" layout="horizontal" htmlId={htmlIds.benefitsId}>
        <CardList cards={benefits} type="benefits" />
      </Section>
      <Section type="gallery" layout="horizontal" htmlId={htmlIds.galleryId}>
        <Gallery products={galleryItems} />
      </Section>
      <Section type="cards-with-images" layout="horizontal" htmlId={htmlIds.cardListId}>
        <CardList cards={cardsWithImages} type="cards-with-images" />
      </Section>
      <Section type="team" layout="horizontal" htmlId={htmlIds.teamId}>
        <CardList cards={team} type="team" />
      </Section>
      <Banner onClick={openModal} />
      <Footer />
    </>
  );
}

export default App;
