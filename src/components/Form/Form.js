import './Form.css';

import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

function Form(props) {
  return (
    <>
      <form
        className="form form_visible"
        id={`${props.modalType}-form`}
        name={`${props.modalType}Form`}
        action="#"
        noValidate
      >
        <h2 className="form__title">Write us</h2>
        <button className="form__close-button" type="button" aria-label="close-modal" onClick={props.closeModal} />
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
        onClick={props.closeModal}
        onKeyDown={props.closeModal}
      />
    </>
  );
}

export default Form;
