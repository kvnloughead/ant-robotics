import './Button.css';

function Button({ label, onClick, style, location }) {
  return (
    <button type="button" className={`button button_location_${location}`} onClick={onClick} style={style}>
      {label}
    </button>
  );
}

export default Button;
