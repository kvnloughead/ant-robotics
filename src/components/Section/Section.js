import './Section.css';

function Section({ layout, title, type, children }) {
  return (
    <section className={`section section_type_${type} section_layout_${layout}`}>
      <h2 className="section__title">{title}</h2>
      {children}
    </section>
  );
}

export default Section;
