import './Section.css';
import { sectionTitles } from '../../config/section-titles';

function Section({ layout, type, children }) {
  return (
    <section className={`section section_type_${type} section_layout_${layout}`}>
      <h2 className={`section__title section__title_type_${type}`}>{sectionTitles[type]}</h2>
      {children}
    </section>
  );
}

export default Section;
