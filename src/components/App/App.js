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
import Header from '../Header/Header';
import { benefits } from '../../config/benefits';
import { cardsWithImages } from '../../config/cards-with-images';
// import { errorMessages } from '../../config/form';
import { team } from '../../config/team';
import Banner from '../Banner/Banner';
import { htmlIds } from '../../config/nav-bar';

function App() {
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  const [windowScrollY, setWindowScrollY] = useState(window.scrollY);
  const [lastScroll] = useState(new Date());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formIsOpen, setFormIsOpen] = useState(false);

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

  const handleMenuIconClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <Form isOpen={formIsOpen} setIsOpen={setFormIsOpen} />
      <Header
        windowInnerWidth={windowInnerWidth}
        onResize={handleResize}
        isMobileMenuOpen={isMobileMenuOpen}
        onMenuIconClick={handleMenuIconClick}
        windowScrollY={windowScrollY}
        onScrollY={handleScrollY}
        lastScroll={lastScroll}
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
