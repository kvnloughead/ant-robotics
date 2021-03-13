import './Card.css';
import { processText } from '../../utils/helpers';

function Card(props) {
  return (
    <li className="card">
      <div
        className={`card__image card__image_type_${props.type}`}
        style={{ backgroundImage: `url(${props.card.image})` }}
      />
      <h3 className={`card__title card__title_type_${props.type}`}>{props.card.title}</h3>
      <p className={`card__text card__text_type_${props.type}`}>
        {processText(props.card.text).data.map((result) => (
          <>
            <span
              className={`card__text ${processText(props.card.text).startsWithEmphasis ? 'card__text_emphatic' : ''}`}
            >
              {result[0]}
            </span>
            <span
              className={`card__text ${!processText(props.card.text).startsWithEmphasis ? 'card__text_emphatic' : ''}`}
            >
              {result[1]}
            </span>
          </>
        ))}
      </p>
    </li>
  );
}

export default Card;
