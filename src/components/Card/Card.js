import './Card.css';

function Card(props) {
  return (
    <li className='card'>
      <div className={`card__image card__image_type_${props.type}`} style={{backgroundImage: `url(${props.card.image})`}}></div>
      <h3 className='card__title'>{props.card.title}</h3>
      <p className='card__text'>{props.card.text}</p>
    </li>
  );
}

export default Card;