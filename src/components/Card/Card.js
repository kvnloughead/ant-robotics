import './Card.css';
import { processText } from '../../utils/helpers';

function Card({ card, type }) {
  const { processedText, startsWithEmphasis } = processText(card.text);
  return (
    <li className={`card card_type_${type}`}>
      <div className={`card__image card__image_type_${type}`} style={{ backgroundImage: `url(${card.image})` }} />
      <h3 className={`card__title card__title_type_${type}`}>{card.title}</h3>
      {card.job && <p className="card__job">{card.job}</p>}
      <p className={`card__text card__text_type_${type}`}>
        {processedText.map((result) => (
          <span key={`${processedText.indexOf(result)}`}>
            <span className={`card__text ${startsWithEmphasis ? 'card__text_emphatic' : ''}`}>{result[0]}</span>
            <span className={`card__text ${!startsWithEmphasis ? 'card__text_emphatic' : ''}`}>{result[1]}</span>
          </span>
        ))}
      </p>
    </li>
  );
}

export default Card;
