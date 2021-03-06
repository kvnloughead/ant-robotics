import './SectionContext.css';
import { summary, bulletPoints, checkmark } from '../../config/robot-facts';

export default function SectionContext() {
  return (
    <div className="section-context">
      <p className="section-context__subheading">{summary}</p>
      <ul className="section-context__list">
        {bulletPoints.map((point) => (
          <li key={point.id} className="section-context__list-item">
            <img className="section-context__list-img" alt="checkmark" src={checkmark} />
            <span className="section-context__list-text">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
