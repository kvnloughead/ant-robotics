import './TextInput.css';

function TextInput({ title, type, required, onChange, showErrors, errors, values }) {
  return (
    <>
      <label className="text-input-label" htmlFor={type}>
        {title}
      </label>
      {type === 'message' ? (
        <textarea
          className="text-input text-input_type_text-area"
          type={type}
          id={type}
          name={type}
          required={required}
          autoComplete="on"
          onChange={onChange}
          value={values[type] || ''}
        />
      ) : (
        <input
          className="text-input"
          type={type}
          id={type}
          name={type}
          required={required}
          autoComplete="on"
          onChange={onChange}
          value={values[type] || ''}
        />
      )}
      <span className={`text-input-error text-input-error_type_${type}`} id="name-input-error">
        {showErrors && errors[type]}
      </span>
    </>
  );
}

export default TextInput;
