import './Button.css';

function Button(props) {
  return (
    <button className='button' onClick={props.onClick} style={props.style}>
      {props.label}
    </button>
  );
}

export default Button;