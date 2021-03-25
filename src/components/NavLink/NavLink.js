import './NavLink.css';

function NavLink({ id, title, isHeaderNavLight }) {
  return (
    <li className="nav-item">
      <a className={`nav-link ${isHeaderNavLight ? 'dark-text' : ''}`} href={`#${id}`}>
        {title}
      </a>
    </li>
  );
}

export default NavLink;
