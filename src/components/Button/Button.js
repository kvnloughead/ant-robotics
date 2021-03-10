import './Button.css';

function Button(props) {
  return (
    <button type="button" className="button" onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export default Button;
