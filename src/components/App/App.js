import './App.css';
import CardList from '../CardList/CardList';
import Carousel from '../Carousel/Carousel';
import Section from '../Section/Section';
import { benefits } from '../../config/benefits';
import { cardsWithImages } from '../../config/cards-with-images';
import { products } from '../../config/products';

function App() {
  return (
    <>
      <Section type="products" layout="vertical" title="Wide choice of transport robots">
        <Carousel products={products} />
      </Section>
      <Section type="benefits" layout="horizontal" title="Benefits">
        <CardList cards={benefits} type="benefits" />
      </Section>
      <Section type="cards-with-images" layout="horizontal" title="Customers benefit despite of the automation level">
        <CardList cards={cardsWithImages} type="cards-with-images" />
      </Section>
    </>
  );
}

export default App;
