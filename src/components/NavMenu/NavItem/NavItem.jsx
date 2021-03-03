import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import style from './NavItem.module.css';

const NavItem = ({ itemTitle, route, isHovered, isActiveNavLink }) => {
  const { t } = useTranslation();

  // Задаємо стиль, якщо активоване вспливаюче меню
  const HoveredNavItemStyle = isHovered
    ? `${style.navItem} ${style.hoveredDropdown}`
    : style.navItem;

  // Задаємо стиль, якщо
  const DropdownNavItemStyle = isActiveNavLink
    ? `${HoveredNavItemStyle} active`
    : HoveredNavItemStyle;
  return (
    <>
      {route ? (
        <li>
          <NavLink exact to={route} className={style.navItem}>
            {t(itemTitle)}
          </NavLink>
        </li>
      ) : (
        <span className={DropdownNavItemStyle}>{t(itemTitle)}</span>
      )}
    </>
  );
};

NavItem.defaultProps = {
  route: '',
  isHovered: false,
  isActiveNavLink: false,
};

NavItem.propTypes = {
  itemTitle: PropTypes.string.isRequired,
  route: PropTypes.string,
  isHovered: PropTypes.bool,
  isActiveNavLink: PropTypes.bool,
};

export default NavItem;
