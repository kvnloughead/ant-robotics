import './App.css';
import { useState, useCallback } from 'react';
import Carousel from '../Carousel/Carousel';
import Section from '../Section/Section';
import SectionContext from '../SectionContext/SectionContext';
import Gallery from '../Gallery/Gallery';
import CardList from '../CardList/CardList';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import { htmlIds } from '../../config/nav-bar';
import * as benefitsConfig from '../../config/benefits';
import * as galleryConfig from '../../config/gallery';
import * as teamConfig from '../../config/team';
import * as cardsWithImagesConfig from '../../config/cards-with-images';
import * as productsConfig from '../../config/products';

import { errorMessages } from '../../config/form';

function App() {
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  const [windowScrollY, setWindowScrollY] = useState(window.scrollY);
  const [lastScroll] = useState(new Date());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState(errorMessages);
  const [showErrors, setShowErrors] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const openModal = () => {
    setFormIsOpen(true);
  };

  const handleResize = () => {
    setWindowInnerWidth(window.innerWidth);
  };

  const handleScrollY = () => {
    setWindowScrollY(window.scrollY);
    setIsMobileMenuOpen(false);
  };

  const resetForm = useCallback(
    (newValues = { email: '', password: '', message: '' }, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
      setShowErrors(false);
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
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage || '' });
    setIsValid(target.closest('form').checkValidity());
  };

  const handleSubmit = (event, canSubmit) => {
    event.stopPropagation();
    if (canSubmit) {
      closeModal();
    } else {
      setShowErrors(true);
    }
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
        showErrors={showErrors}
        values={values}
      />
      <Header
        windowInnerWidth={windowInnerWidth}
        onResize={handleResize}
        isMobileMenuOpen={isMobileMenuOpen}
        onMenuIconClick={handleMenuIconClick}
        windowScrollY={windowScrollY}
        onScrollY={handleScrollY}
        lastScroll={lastScroll}
      />
      <Section title={productsConfig.title} type="products" layout="vertical" htmlId={htmlIds.productsId}>
        <Carousel products={productsConfig.data} type="products" onClick={openModal} />
        <SectionContext />
      </Section>
      <Section title={benefitsConfig.title} type="benefits" layout="horizontal" htmlId={htmlIds.benefitsId}>
        <CardList cards={benefitsConfig.data} type="benefits" />
      </Section>
      <Section title={galleryConfig.title} type="gallery" layout="horizontal" htmlId={htmlIds.galleryId}>
        <Gallery items={galleryConfig.data} />
      </Section>
      <Section
        title={cardsWithImagesConfig.title}
        type="cards-with-images"
        layout="horizontal"
        htmlId={htmlIds.cardListId}
      >
        <CardList cards={cardsWithImagesConfig.data} type="cards-with-images" />
      </Section>
      <Section title={teamConfig.title} type="team" layout="horizontal" htmlId={htmlIds.teamId}>
        <CardList cards={teamConfig.data} type="team" />
      </Section>
      <Banner onClick={openModal} />
      <Footer />
    </>
  );
}

export default App;
