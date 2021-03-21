import './Button.css';

function Button({ label, onClick, style, location, isValid }) {
  return (
    <button
      type="button"
      className={`button button_location_${location} ${
        location === 'form' && !isValid ? 'button_inactive ' : ''
      }clickable`}
      onClick={onClick}
      style={style}
      disabled={location === 'form' && !isValid}
    >
      {label}
    </button>
  );
}

export default Button;
