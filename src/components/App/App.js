import './App.css';
import Button from '../Button/Button';
import CardList from '../CardList/CardList';
import Form from '../Form/Form';
import Section from '../Section/Section';
import { benefits } from '../../utils/config';

function App() {
  return (
    <>
      <Form></Form>
      <Section type='benefits' layout='four-columns' title='Benefits'>
        <CardList cards={benefits}></CardList>
      </Section>
      
    </>
  );
}

export default App;
