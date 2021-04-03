import './Header.css';
import { header } from '../../config/header';
import Button from '../Button/Button';
import HeaderNav from '../HeaderNav/HeaderNav';
import { htmlIds } from '../../config/nav-bar';

function Header({ lastScroll, isMobileMenuOpen, onMenuIconClick, windowScrollY, onScrollY }) {
  return (
    <header className="header" id={htmlIds.brandId}>
      <HeaderNav
        isMobileMenuOpen={isMobileMenuOpen}
        onMenuIconClick={onMenuIconClick}
        windowScrollY={windowScrollY}
        onScrollY={onScrollY}
        lastScroll={lastScroll}
      />
      <div className="header__column_left">
        <div />
        <div style={{ backgroundImage: `url(${header.curve})` }} />
        <div style={{ backgroundImage: `url(${header.curve})` }} />
      </div>
      <div className="header__main">
        <img className="header__logo" src={header.logo} alt="logo" />
        <h1 className="header__title">{header.title}</h1>
        <p className="header__subtitle">{header.subtitle}</p>
        <div className="header__buttons">
          <Button
            id="headerPrimaryButton"
            className="header__button"
            style={{ background: '#242424', border: '1px solid #717171', color: '#A0A0A0' }}
          />
          <Button id="headerSecondaryButton" className="header__button" />
        </div>
      </div>
      <div className="header__column_right">
        <div />
        <div style={{ backgroundImage: `url(${header.curve})` }} />
        <div style={{ backgroundImage: `url(${header.curve})` }} />
      </div>
    </header>
  );
}

export default Header;
