import './Form.css';

import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

function Form({ modalType, closeModal }) {
  return (
    <>
      <form className="form" id={`${modalType}-form`} name={`${modalType}Form`} action="#" noValidate>
        <h2 className="form__title">Write us</h2>
        <button className="form__close-button" type="button" aria-label="close-modal" onClick={closeModal} />
        <TextInput type="name" title="Name" />
        <TextInput type="email" title="Email*" required />
        <TextInput type="textarea" title="Message" />
        <Button label="Submit" location="form" />
      </form>
      <div
        role="button"
        aria-label="close-modal"
        tabIndex={0}
        className="overlay"
        onClick={closeModal}
        onKeyDown={closeModal}
      />
    </>
  );
}

export default Form;
