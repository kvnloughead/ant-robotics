import './App.css';
import Button from '../Button/Button';
import CardList from '../CardList/CardList';
import Carousel from '../Carousel/Carousel';
import Section from '../Section/Section';
import { benefits, products } from '../../utils/config';

function App() {
  return (
    <>
      <Button label={'Sample Button'}/>
      <Section type='benefits' layout='four-columns' title='Benefits'>
        <CardList cards={benefits}></CardList>
      </Section>
      <Section type='products' layout='vertical' title='Wide choice of transport robots'>
        <Carousel products={products} />
      </Section>
      <Section type='benefits' layout='horizontal' title='Benefits'></Section>
    </>
  );
}

export default App;
