import './HeaderNav.css';
import NavLink from '../NavLink/NavLink';
import { links, brandTitle } from '../../config/nav-link';
import { linkedIn } from '../../config/footer';

function HeaderNav() {
  return (
    <nav className="header-nav">
      <a className="header-nav__brand" href="/">
        {brandTitle}
      </a>
      <ul className="header-nav__links">
        {links.map((link) => (
          <NavLink id={link.id} title={link.title} key={link.id} />
        ))}
      </ul>
      <a className="header-nav__social" href={linkedIn}>
        in
      </a>
    </nav>
  );
}

export default HeaderNav;
