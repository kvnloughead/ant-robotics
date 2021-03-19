import './Contact.css';

const Contact = ({ contact: { title, type, value } }) => {
  switch (type) {
    case 'text':
      return (
        <li className="contact">
          <strong>{title}</strong>:&nbsp;{value}
        </li>
      );
    case 'email':
      return (
        <li className="contact">
          <strong> {title}</strong>:&nbsp;
          <a className="contact__link" href={`mailto:${value}`}>
            {value}
          </a>
        </li>
      );
    case 'phone':
      return (
        <li className="contact">
          <strong> {title}</strong>:&nbsp;
          <a className="contact__link" href={`tel:${value}`}>
            {value}
          </a>
        </li>
      );
    case 'link':
      return (
        <li className="contact">
          <strong>
            <a className="contact__link" href={value}>
              {title}
            </a>
          </strong>
        </li>
      );
    default:
      return <>Uknown contact type</>;
  }
};

export default Contact;
