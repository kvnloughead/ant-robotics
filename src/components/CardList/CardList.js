import './CardList.css';
import Card from '../Card/Card';

function CardList(props) {
  return (
    <ul className="card-list">
      {props.cards.map((card) => (
        <Card card={card} key={props.cards.indexOf(card)} />
      ))}
    </ul>
  );
}

export default CardList;
