import './Card.css';

function Card(props) {
  return (
    <li className='card'>
      <div className={`card__image card__image_type_${props.type}`} style={{backgroundImage: `url(${props.card.image})`}}></div>
      <h3 className={`card__title card__title_type_${props.type}`}>{props.card.title}</h3>
      <p className={`card__text card__text_type_${props.type}`}>{props.card.text}</p>
    </li>
  );
}

export default Card;