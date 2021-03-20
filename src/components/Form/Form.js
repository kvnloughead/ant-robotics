import './Form.css';

import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

function Form({ modalType, onClose, isOpen }) {
  return (
    <>
      <form
        className={`form ${isOpen ? 'form_visible' : ''}`}
        id={`${modalType}-form`}
        name={`${modalType}Form`}
        action="#"
        noValidate
      >
        <h2 className="form__title">Write us</h2>
        <button className="form__close-button" type="button" aria-label="close-modal" onClick={onClose} />
        <TextInput type="name" title="Name" />
        <TextInput type="email" title="Email*" required />
        <TextInput type="textarea" title="Message" />
        <Button label="Submit" location="form" />
      </form>
      <div
        role="button"
        aria-label="close-modal"
        tabIndex={0}
        className={`overlay ${isOpen ? 'overlay_visible' : ''}`}
        onClick={onClose}
        onKeyDown={onClose}
      />
    </>
  );
}

export default Form;
