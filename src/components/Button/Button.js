import './Button.css';

function Button({ label, onClick, style, location, isValid = true }) {
  return (
    <button
      type="button"
      className={`button button_location_${location} ${location === 'form' && !isValid ? 'button_inactive ' : ''}${
        isValid && 'clickable'
      }`}
      onClick={onClick}
      style={style}
    >
      {label}
    </button>
  );
}

export default Button;
