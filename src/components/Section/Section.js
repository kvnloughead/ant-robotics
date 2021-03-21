import './Section.css';
import { sectionTitles } from '../../config/section-titles';

function Section({ layout, type, children }) {
  return (
    <section className={`section section_type_${type} section_layout_${layout}`}>
      <div className="section__content">
        <h2 className={`section__title section__title_type_${type}`}>{sectionTitles[type]}</h2>
        {children}
      </div>
    </section>
  );
}

export default Section;
