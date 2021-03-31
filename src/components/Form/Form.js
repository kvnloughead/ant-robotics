import { useEffect } from 'react';
import './Form.css';
import { formTitle } from '../../config/form';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

function Form({ modalType, onClose, isOpen, isValid, handleChange, errors, values, onSubmit, showErrors }) {
  useEffect(() => {
    document.addEventListener('keydown', onClose);
    return () => {
      document.removeEventListener('keydown', onClose);
    };
  });
  return (
    <>
      <form
        className={`form ${isOpen ? 'form_visible' : ''}`}
        id={`${modalType}-form`}
        name={`${modalType}Form`}
        action="#"
        noValidate
      >
        <h2 className="form__title">{formTitle}</h2>
        <button className="form__close-button clickable" type="button" aria-label="close-modal" onClick={onClose} />
        <TextInput
          values={values}
          errors={errors}
          showErrors={showErrors}
          type="name"
          title="Name"
          required
          onChange={handleChange}
        />
        <TextInput
          values={values}
          errors={errors}
          showErrors={showErrors}
          type="email"
          title="Email*"
          required
          onChange={handleChange}
        />
        <TextInput
          values={values}
          errors={errors}
          showErrors={showErrors}
          type="message"
          title="Message"
          required
          onChange={handleChange}
        />
        <Button id="submit" onClick={(event) => onSubmit(event, isValid)} location="form" isValid={isValid} />
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
