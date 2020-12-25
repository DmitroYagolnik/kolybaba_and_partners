import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import routes from '../../servises/routes';
import ChangeLanguageBtn from '../ChangeLanguageBtn/ChangeLanguageBtn';
import style from './PageNavLink.module.css';

const PageNavLink = ({ siteLanguage, changeLanguage }) => {
  const { t } = useTranslation();
  return (
    <nav className={style.nav}>
      <ul className={style.navList}>
        <li className={style.navLink}>
          <NavLink to={routes.HOME}>{t('PageNavLink.Home_page')}</NavLink>
        </li>
        <li className={style.navLink}>
          <ChangeLanguageBtn
            changeLanguage={changeLanguage}
            siteLanguage={siteLanguage}
          />
        </li>
      </ul>
    </nav>
  );
};

PageNavLink.propTypes = {
  siteLanguage: PropTypes.string.isRequired,
  changeLanguage: PropTypes.func.isRequired,
};

export default PageNavLink;
