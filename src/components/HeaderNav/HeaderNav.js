import { useEffect } from 'react';
import './HeaderNav.css';
import NavLink from '../NavLink/NavLink';
import { menuIcon } from '../../config/header';
import { links, brandTitle } from '../../config/nav-link';
import { linkedIn } from '../../config/footer';
import { screenSizes } from '../../utils/constants';

function HeaderNav({ windowInnerWidth, onResize, isMobileMenuOpen }) {
  useEffect(() => {
    window.addEventListener('resize', onResize);
  });
  return (
    <nav className="header-nav">
      <a className="header-nav__brand" href="/">
        {brandTitle}
      </a>
      {(windowInnerWidth > screenSizes.mobile || isMobileMenuOpen) && (
        <>
          <ul className="header-nav__links">
            {links.map((link) => (
              <NavLink id={link.id} title={link.title} key={link.id} />
            ))}
          </ul>
        </>
      )}
      <a
        className={`header-nav__social ${windowInnerWidth <= screenSizes.mobile ? 'header-nav__social_mobile' : ''}`}
        href={linkedIn}
      >
        in
      </a>
      {windowInnerWidth <= screenSizes.mobile && (
        <button
          type="button"
          aria-label="open-or-close-mobile-menu"
          className={`${true ? 'header-nav__open-menu-button' : 'header-nav__close-menu-button'}`}
          style={{ backgroundImage: `url(${menuIcon})` }}
        />
      )}
    </nav>
  );
}

export default HeaderNav;
