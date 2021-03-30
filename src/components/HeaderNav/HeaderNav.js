import { useEffect, useState } from 'react';
import './HeaderNav.css';
import NavLink from '../NavLink/NavLink';
import { links, brandTitle, darkMenuIcon, lightMenuIcon, darkCloseIcon, lightCloseIcon } from '../../config/nav-bar';
import { linkedIn } from '../../config/contacts';
import { screenSizes, lightModeStart } from '../../utils/constants';

function HeaderNav({ windowInnerWidth, onResize, isMobileMenuOpen, onMenuIconClick, windowScrollY, onScrollY }) {
  const [isScrolling, setIsScrolling] = useState(false);
  useEffect(() => {
    window.addEventListener('resize', onResize);
  });
  useEffect(() => {
    let scrollingTimer;
    window.addEventListener(
      'scroll',
      () => {
        setIsScrolling(true);
        onScrollY();
        window.clearTimeout(scrollingTimer);
        scrollingTimer = setTimeout(() => {
          setIsScrolling(false);
        }, 250);
      },
      false
    );
  });

  const isMobile = windowInnerWidth <= screenSizes.mobile;
  const isHeaderNavLight = windowScrollY > lightModeStart[isMobile ? 'mobile' : 'notMobile'];
  const currentCloseIcon = isHeaderNavLight ? darkCloseIcon : lightCloseIcon;
  const currentMenuIcon = isHeaderNavLight ? darkMenuIcon : lightMenuIcon;
  return (
    <nav className={`header-nav ${isHeaderNavLight ? 'header-nav_theme_light' : ''} ${isScrolling ? 'opacity' : ''}`}>
      <a className={`header-nav__brand ${isHeaderNavLight ? 'dark-text' : ''}`} href="/">
        {brandTitle}
      </a>
      {(!isMobile || isMobileMenuOpen) && (
        <>
          <ul className={`header-nav__links ${isHeaderNavLight ? 'header-nav__links_theme_light' : ''}`}>
            {links.map((link) => (
              <NavLink htmlId={link.htmlId} title={link.title} key={link.id} isHeaderNavLight={isHeaderNavLight} />
            ))}
          </ul>
        </>
      )}
      <a
        className={`header-nav__social ${isMobile ? 'header-nav__social_mobile' : ''} ${
          isHeaderNavLight ? 'dark-text' : ''
        }`}
        href={linkedIn}
      >
        in
      </a>
      {isMobile && (
        <button
          type="button"
          aria-label="open-or-close-mobile-menu"
          className="header-nav__open-menu-button"
          style={{ backgroundImage: `url(${isMobileMenuOpen ? currentCloseIcon : currentMenuIcon})` }}
          onClick={onMenuIconClick}
        />
      )}
    </nav>
  );
}

export default HeaderNav;
