import './CardList.css';
import Card from '../Card/Card';

function CardList(props) {
  return (
    <ul className={`card-list card-list_type_${props.type}`}>
      {props.cards.map((card) => (
        <Card card={card} type={props.type} key={props.cards.indexOf(card)} />
      ))}
    </ul>
  );
}

export default CardList;
