import { useEffect, useState } from 'react';
import './HeaderNav.css';
import NavLink from '../NavLink/NavLink';
import { links, brandTitle, darkMenuIcon, lightMenuIcon, darkCloseIcon, lightCloseIcon } from '../../config/nav-bar';
import { linkedIn } from '../../config/contacts';
import { screenSizes, lightModeStart } from '../../utils/constants';

function HeaderNav() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  const [windowScrollY, setWindowScrollY] = useState(window.scrollY);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScrollY = () => {
    setWindowScrollY(window.scrollY);
    setIsMobileMenuOpen(false);
  };

  const handleResize = () => {
    setWindowInnerWidth(window.innerWidth);
  };

  const handleMenuIconClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  useEffect(() => {
    let scrollingTimer;
    window.addEventListener(
      'scroll',
      () => {
        setIsScrolling(true);
        handleScrollY();
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
      {!isMobile ? (
        <>
          <ul
            className={`header-nav__links ${isHeaderNavLight ? 'header-nav__links_theme_light' : ''} ${
              isMobileMenuOpen ? 'header-nav__links_mobile-menu' : ''
            }`}
          >
            {links.map((link) => (
              <NavLink htmlId={link.htmlId} title={link.title} key={link.id} isHeaderNavLight={isHeaderNavLight} />
            ))}
          </ul>
        </>
      ) : (
        <ul
          className={`header-nav__links ${isHeaderNavLight ? 'header-nav__links_theme_light' : ''} ${
            isMobileMenuOpen ? 'header-nav__links_mobile-menu' : ''
          }`}
        >
          {links.map((link) => (
            <NavLink htmlId={link.htmlId} title={link.title} key={link.id} isHeaderNavLight={isHeaderNavLight} />
          ))}
        </ul>
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
          onClick={handleMenuIconClick}
        />
      )}
    </nav>
  );
}

export default HeaderNav;
