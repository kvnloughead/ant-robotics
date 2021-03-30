import './CardList.css';
import Card from '../Card/Card';

function CardList({ cards, type }) {
  return (
    <ul className={`card-list card-list_type_${type}`}>
      {cards.map((card) => (
        <Card card={card} type={type} key={card.id} />
      ))}
    </ul>
  );
}

export default CardList;
