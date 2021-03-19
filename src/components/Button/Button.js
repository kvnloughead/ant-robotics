import './Button.css';

function Button({ label, onClick }) {
  return (
    <button
      type="button"
      className={`button button_location_${props.location}`}
      onClick={props.onClick}
      style={props.style}
    >
      {props.label}
    </button>
  );
}

export default Button;
