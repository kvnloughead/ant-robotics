import './App.css';
import CardList from '../CardList/CardList';
import Carousel from '../Carousel/Carousel';
import Section from '../Section/Section';
import { benefits } from '../../config/benefits';
import { cardsWithImages } from '../../config/cards-with-images';
import { products } from '../../config/products';
import { team } from '../../config/team';

function App() {
  return (
    <>
      <Section type="products" layout="vertical">
        <Carousel products={products} />
      </Section>
      <Section type="benefits" layout="horizontal">
        <CardList cards={benefits} type="benefits" />
      </Section>
      <Section type="cards-with-images" layout="horizontal">
        <CardList cards={cardsWithImages} type="cards-with-images" />
      </Section>
      <Section type="team" layout="horizontal">
        <CardList cards={team} type="team" />
      </Section>
    </>
  );
}

export default App;
