import './Section.css';

function Section(props) {
  return (
    <section className={`section section_type_${props.type} section_layout_${props.layout}`}>
      <h2 className="section__title">{props.title}</h2>
      {props.children}
      {/* delete placeholders */}
      {props.layout === 'two-columns' ? (
        <div className='placeholder_two-columns'></div>
      ) : (
        <div className='placeholder_four-columns'>
          <div className='placeholder__card'></div>
          <div className='placeholder__card'></div>
          <div className='placeholder__card'></div>
          <div className='placeholder__card'></div>
        </div>
      )
      }
      {/* delete placeholders */}
    </section>
  );
}

export default Section;