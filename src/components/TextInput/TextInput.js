import './TextInput.css';

function TextInput({ title, type, required, handleInputFocus, handleChange }) {
  return (
    <>
      <label className="text-input-label" htmlFor={type}>
        {title}
      </label>
      {type === 'textarea' ? (
        <textarea
          className="text-input text-input_type_text-area"
          type={type}
          id={type}
          name={type}
          required={required}
          autoComplete="on"
          onFocus={handleInputFocus}
          onBlur={handleInputFocus}
          onChange={handleChange}
        />
      ) : (
        <input
          className="text-input"
          type={type}
          id={type}
          name={type}
          required={required}
          autoComplete="on"
          onFocus={handleInputFocus}
          onBlur={handleInputFocus}
          onChange={handleChange}
        />
      )}
    </>
  );
}

export default TextInput;
