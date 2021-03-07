import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import style from './NavItem.module.css';

const NavItem = ({
  itemTitle,
  route,
  isHovered,
  isActiveNavLink,
  openDropdown,
}) => {
  const { t } = useTranslation();

  // Задаємо стиль, якщо активоване вспливаюче меню
  const HoveredNavItemStyle = isHovered
    ? `${style.navItem} ${style.hoveredDropdown}`
    : style.navItem;

  // Задаємо стиль "активності" навігаційної іконки
  const DropdownNavItemStyle = isActiveNavLink
    ? `${HoveredNavItemStyle} active`
    : HoveredNavItemStyle;

  let NavComponent;
  if (route) {
    NavComponent = (
      <li>
        <NavLink exact to={route} className={style.navItem}>
          {t(itemTitle)}
        </NavLink>
      </li>
    );
  } else if (openDropdown && !route) {
    NavComponent = (
      /* Так як даний функціонал буде працювати лише на мобільний
        тому доступ до елементу з клавіатури не передбачається */
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <span
        role="menuitem"
        tabIndex="0"
        onClick={openDropdown}
        className={DropdownNavItemStyle}
      >
        {t(itemTitle)}
      </span>
    );
  } else {
    NavComponent = <span className={DropdownNavItemStyle}>{t(itemTitle)}</span>;
  }
  return NavComponent;
};

NavItem.defaultProps = {
  route: '',
  isHovered: false,
  isActiveNavLink: false,
  openDropdown: null,
};

NavItem.propTypes = {
  itemTitle: PropTypes.string.isRequired,
  route: PropTypes.string,
  isHovered: PropTypes.bool,
  isActiveNavLink: PropTypes.bool,
  openDropdown: PropTypes.func,
};

export default NavItem;
