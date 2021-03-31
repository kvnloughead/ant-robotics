import './NavLink.css';

function NavLink({ htmlId, title, isHeaderNavLight }) {
  return (
    <li className="nav-item">
      <a className={`nav-link ${isHeaderNavLight ? 'dark-text' : ''}`} href={`#${htmlId}`}>
        {title}
      </a>
    </li>
  );
}

export default NavLink;
