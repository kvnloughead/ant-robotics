import './NavLink.css';

function NavLink({ id, title }) {
  return (
    <li className="nav-item">
      <a className="nav-link" href={`#${id}`}>
        {title}
      </a>
    </li>
  );
}

export default NavLink;
