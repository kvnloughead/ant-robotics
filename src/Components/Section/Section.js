import './Section.css';

function Section(props) {
  return (
    <section className={`section section_type_${props.type} section_layout_${props.layout}`}>
      <h2 className="section__title">{props.title}</h2>
      <p className='placeholder'>Placeholder</p>
    </section>
  );
}

export default Section;