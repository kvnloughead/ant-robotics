import './Button.css';
import { labelsById as labels } from '../../config/buttons';

function Button({ id, onClick, style, location, isValid = true }) {
  return (
    <button
      type="button"
      className={`button button_location_${location} ${location === 'form' && !isValid ? 'button_inactive ' : ''}${
        isValid && 'clickable'
      }`}
      onClick={onClick}
      style={style}
    >
      {labels[id]}
    </button>
  );
}

export default Button;
