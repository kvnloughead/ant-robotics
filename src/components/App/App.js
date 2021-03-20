import './App.css';
import { useState } from 'react';
import Carousel from '../Carousel/Carousel';
import Section from '../Section/Section';
import Gallery from '../Gallery/Gallery';
import { products } from '../../config/products';
import { galleryItems } from '../../config/gallery';
import CardList from '../CardList/CardList';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';
import { benefits } from '../../config/benefits';
import { cardsWithImages } from '../../config/cards-with-images';
import { team } from '../../config/team';
import Banner from '../Banner/Banner';

function App() {
  const [formIsOpen, setFormIsOpen] = useState(false);

  const openModal = () => {
    setFormIsOpen(true);
  };

  const closeModal = () => {
    setFormIsOpen(false);
  };

  const handleSubmit = () => {
    setFormIsOpen(false);
  };

  return (
    <>
      <Form isOpen={formIsOpen} onClose={closeModal} onSubmit={handleSubmit} />
      <Section type="products" layout="vertical">
        <Carousel products={products} />
      </Section>
      <Section type="benefits" layout="horizontal">
        <CardList cards={benefits} type="benefits" />
      </Section>
      <Section type="gallery" layout="horizontal">
        <Gallery products={galleryItems} />
      </Section>
      <Section type="cards-with-images" layout="horizontal">
        <CardList cards={cardsWithImages} type="cards-with-images" />
      </Section>
      <Section type="team" layout="horizontal">
        <CardList cards={team} type="team" />
      </Section>
      <Banner onClick={openModal} />
      <Footer />
    </>
  );
}

export default App;
