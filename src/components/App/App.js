import './App.css';
import Section from '../Section/Section';
import CardList from '../CardList/CardList';
import { benefits } from '../../utils/config';

function App() {
  return (
    <>
      <Section type='benefits' layout='four-columns' title='Benefits'>
        <CardList cards={benefits}></CardList>
      </Section>
    </>
  );
}

export default App;
