import './TextInput.css';

function TextInput(props) {
  return (
    <>
    <label className="form__input-label" htmlFor="name">
        Name
      </label>
      <input
        className="form__input"
        type="name"
        id="name"
        name="name"
        required
        autoComplete="on"
        onFocus={props.handleInputFocus}
        onBlur={props.handleInputFocus}
        onChange={props.handleChange}
      />
      </>
  );
}

export default TextInput;