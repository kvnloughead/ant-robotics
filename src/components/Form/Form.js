import './Form.css';

import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

function Form(props) {
  return (
    <form 
      className='form'
      id={`${props.modalType}-form`}
      name={`${props.modalType}Form`}
      action="#"
      noValidate
    >
      <h2 className='form__title'>Write us</h2>
      <button className='form__close-button' 
        type="button" 
        aria-label="close-modal"
        onClick={props.closeModal} />
      <TextInput />
      <TextInput />
      <TextInput />
      <Button />
    </form>
  );
}

export default Form;