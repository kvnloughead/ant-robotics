import './App.css';
import Button from '../Button/Button';
import CardList from '../CardList/CardList';
import Section from '../Section/Section';
import { benefits } from '../../utils/config';

function App() {
  return (
    <>
      <Section type='benefits' layout='horizontal' title='Benefits'>
        <CardList cards={benefits} type='benefits'></CardList>
      </Section>
      <Section type='products' layout='vertical' title='Wide choice of transport robots'></Section>
      <Section type='benefits' layout='horizontal' title='Benefits'></Section>
    </>
  );
}

export default App;
