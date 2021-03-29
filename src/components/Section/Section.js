import './Section.css';

function Section({ layout, htmlId, type, children, title }) {
  return (
    <section className={`section section_type_${type} section_layout_${layout}`} id={htmlId}>
      <div className="section__content">
        <h2 className={`section__title section__title_type_${type}`}>{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default Section;
