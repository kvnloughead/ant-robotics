import './SectionContext.css';
import { data } from '../../config/robot-facts';

export default function SectionContext() {
  return (
    <div className="section-context">
      <p className="section-context__subheading">{data[0].summary}</p>
      <ul className="section-context__list">
        <li className="section-context__list-item">
          <img
            className="section-context__list-img"
            alt="checkmark"
            src="../../images/products/product_context-checkmark.svg"
          />
          <span className="section-context__list-text">{data[0].pointOne}</span>
        </li>
        <li className="section-context__list-item">
          <img
            className="section-context__list-img"
            alt="checkmark"
            src="../../images/products/product_context-checkmark.svg"
          />
          <span className="section-context__list-text">Flexible</span>
        </li>
        <li className="section-context__list-item">
          <img
            className="section-context__list-img"
            alt="checkmark"
            src="../../images/products/product_context-checkmark.svg"
          />
          <span className="section-context__list-text">Customizable</span>
        </li>
      </ul>
    </div>
  );
}
