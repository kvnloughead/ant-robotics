import './CardList.css';
import Card from '../Card/Card';

function CardList({ cards, type }) {
  return (
    <ul className={`card-list card-list_type_${type} ${cards.length % 4 === 0 && 'card-list_spacing_space-between'}`}>
      {cards.map((card) => (
        <Card card={card} type={type} key={cards.indexOf(card)} />
      ))}
    </ul>
  );
}

export default CardList;
