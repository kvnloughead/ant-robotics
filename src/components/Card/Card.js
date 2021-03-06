import './Card.css';

function Card(props) {
  return (
    <li className='card'>
      <img className='card__image' src={props.card.image} alt='#'/>
      <h3 className='card__title'>{props.card.title}</h3>
      <p className='card__text'>{props.card.text}</p>
    </li>
  );
}

export default Card;