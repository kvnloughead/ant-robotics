import './Card.css';
import { processText } from '../../utils/helpers';

function Card(props) {
  const { processedText, startsWithEmphasis } = processText(props.card.text);
  return (
    <li className={`card card_type_${props.type}`}>
      <div
        className={`card__image card__image_type_${props.type}`}
        style={{ backgroundImage: `url(${props.card.image})` }}
      />
      <h3 className={`card__title card__title_type_${props.type}`}>{props.card.title}</h3>
      {props.card.job && <p className="card__job">{props.card.job}</p>}
      <p className={`card__text card__text_type_${props.type}`}>
        {processedText.map((result) => (
          <>
            <span key={Math.random()} className={`card__text ${startsWithEmphasis ? 'card__text_emphatic' : ''}`}>
              {result[0]}
            </span>
            <span key={Math.random()} className={`card__text ${!startsWithEmphasis ? 'card__text_emphatic' : ''}`}>{result[1]}</span>
          </>
        ))}
      </p>
    </li>
  );
}

export default Card;
