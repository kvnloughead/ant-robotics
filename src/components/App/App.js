import './App.css';
import Button from '../Button/Button';
import CardList from '../CardList/CardList';
import Carousel from '../Carousel/Carousel';
import Section from '../Section/Section';
import { benefits, products } from '../../utils/config';

function App() {
  return (
    <>
      <Section type='benefits' layout='horizontal' title='Benefits'>
        <CardList cards={benefits} type='benefits'/>
      <Button label="Sample Button" />
      <Section type="benefits" layout="four-columns" title="Benefits">
        <CardList cards={benefits} />
      </Section>
      <Section type='products' layout='vertical' title='Wide choice of transport robots'>
        <Carousel products={products} />
      </Section>
    </>
  );
}

export default App;
