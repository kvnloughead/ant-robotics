import './App.css';
import Carousel from '../Carousel/Carousel';
import Section from '../Section/Section';
import Gallery from '../Gallery/Gallery';
import { products } from '../../utils/config';
import { galleryItems } from '../../config/gallery';
import CardList from '../CardList/CardList';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';
import { benefits } from '../../config/benefits';
import { cardsWithImages } from '../../config/cards-with-images';
import { team } from '../../config/team';

function App() {
  return (
    <>
      <Form />
      <Section type="products" layout="vertical">
        <Carousel products={products} />
      </Section>
      <Section type="benefits" layout="horizontal">
        <CardList cards={benefits} type="benefits" />
      </Section>
      <Section type="gallery" layout="horizontal" title="Gallery">
        <Gallery products={galleryItems} />
      </Section>
      <Section type="cards-with-images" layout="horizontal">
        <CardList cards={cardsWithImages} type="cards-with-images" />
      </Section>
      <Section type="team" layout="horizontal">
        <CardList cards={team} type="team" />
      </Section>
      <Footer />
    </>
  );
}

export default App;
