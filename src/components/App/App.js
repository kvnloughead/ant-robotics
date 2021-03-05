import './App.css';
import Button from '../Button/Button';
import CardList from '../CardList/CardList';
import Section from '../Section/Section';
import { benefits } from '../../utils/config';

function App() {
  return (
    <>
      <Button label="Sample Button" />
      <Section type="benefits" layout="four-columns" title="Benefits">
        <CardList cards={benefits} />
      </Section>
      <Section type="products" layout="vertical" title="Wide choice of transport robots" />
      <Section type="benefits" layout="horizontal" title="Benefits" />
    </>
  );
}

export default App;
