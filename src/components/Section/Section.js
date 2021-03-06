import './Section.css';

function Section(props) {
  return (
    <section className={`section section_type_${props.type} section_layout_${props.layout}`}>
      <h2 className="section__title">{props.title}</h2>
      {props.children}
    </section>
  );
}

export default Section;