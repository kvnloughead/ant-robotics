import './Card.css';

function Card({ card, type }) {
  return (
    <li className={`card card_type_${type}`}>
      <div className={`card__image card__image_type_${type}`} style={{ backgroundImage: `url(${card.image})` }} />
      <h3 className={`card__title card__title_type_${type}`}>{card.title}</h3>
      {card.job && <p className="card__job">{card.job}</p>}
      {/* eslint-disable react/no-danger */}
      <p className={`card__text card__text_type_${type}`} dangerouslySetInnerHTML={{ __html: card.text }} />
    </li>
  );
}

export default Card;
