import './App.css';
import CardList from '../CardList/CardList';
import Carousel from '../Carousel/Carousel';
import Section from '../Section/Section';
import { benefits, products } from '../../utils/config';

function App() {
  return (
    <>
      <Section type="benefits" layout="horizontal" title="Benefits">
        <CardList cards={benefits} type="benefits" />
      </Section>
      <Section type="products" layout="vertical" title="Wide choice of transport robots">
        <Carousel products={products} />
      </Section>
    </>
  );
}

export default App;
