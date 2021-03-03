import React from 'react';
import Media from 'react-media';
import PropTypes from 'prop-types';
import MobileNavLinks from './MobileNavLinks/MobileNavLinks';
import ChangeLanguageBtn from '../ChangeLanguageBtn/ChangeLanguageBtn';
import style from './NavMenu.module.css';
import NavLinksList from './NavLinksList/NavLinksList';

const NavMenu = ({ siteLanguage, changeLanguage }) => {
  return (
    <nav className={style.nav}>
      <ul className={style.navList}>
        <Media
          queries={{
            mobile: '(max-width: 767px)',
            noMobile: '(min-width: 768px)',
          }}
        >
          {matches => (
            <>
              {matches.mobile && <MobileNavLinks />}
              {matches.noMobile && <NavLinksList />}
            </>
          )}
        </Media>
        <li>
          <ChangeLanguageBtn
            changeLanguage={changeLanguage}
            siteLanguage={siteLanguage}
          />
        </li>
      </ul>
    </nav>
  );
};

NavMenu.propTypes = {
  siteLanguage: PropTypes.string.isRequired,
  changeLanguage: PropTypes.func.isRequired,
};

export default NavMenu;
