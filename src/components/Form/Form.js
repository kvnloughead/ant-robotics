import { useEffect, useCallback, useState } from 'react';
import './Form.css';
import { formTitle, errorMessages } from '../../config/form';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

function Form({ modalType, isOpen, setIsOpen }) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState(errorMessages);
  const [showErrors, setShowErrors] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const resetForm = useCallback(
    (newValues = { email: '', password: '', message: '' }, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
      setShowErrors(false);
    },
    [setValues, setErrors, setIsValid]
  );

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage || '' });
    setIsValid(target.closest('form').checkValidity());
  };

  const closeModal = (evt) => {
    evt.stopPropagation();
    if (evt.type === 'click' || evt.key === 'Escape') {
      setIsOpen(false);
      resetForm();
    }
  };

  const handleSubmit = (event, canSubmit) => {
    event.stopPropagation();
    if (canSubmit) {
      closeModal(event);
    } else {
      setShowErrors(true);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', closeModal);
    return () => {
      document.removeEventListener('keydown', closeModal);
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
        <button className="form__close-button clickable" type="button" aria-label="close-modal" onClick={closeModal} />
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
        <Button id="submit" onClick={(event) => handleSubmit(event, isValid)} location="form" isValid={isValid} />
      </form>
      <div
        role="button"
        aria-label="close-modal"
        tabIndex={0}
        className={`overlay ${isOpen ? 'overlay_visible' : ''}`}
        onClick={closeModal}
        onKeyDown={closeModal}
      />
    </>
  );
}

export default Form;
