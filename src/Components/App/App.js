import './App.css';
import Section from '../Section/Section'

function App() {
  return (
    <>
      <Section type='products' layout='columns' title='Wide choice of transport robots'></Section>
      <Section type='benefits' layout='rows' title='Benefits'></Section>
    </>
  );
}

export default App;
