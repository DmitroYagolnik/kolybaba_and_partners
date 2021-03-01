/**
 *  Даний компонент використовується для
 * створення посилань у вспливаючому меню.
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import style from './DropdownItem.module.scss';

const DropdownItem = ({ servicePageName, routePage, closeDropdown }) => {
  const { t } = useTranslation();
  return (
    <li key={routePage} className={style.dropdownItem}>
      <NavLink
        className={style.LinkArticleList}
        to={routePage}
        // Закриваємо вспливаюче меню після Click
        onClick={closeDropdown}
      >
        {t(servicePageName)}
      </NavLink>
    </li>
  );
};

DropdownItem.propTypes = {
  servicePageName: PropTypes.string.isRequired,
  routePage: PropTypes.string.isRequired,
  closeDropdown: PropTypes.func.isRequired,
};

export default DropdownItem;
