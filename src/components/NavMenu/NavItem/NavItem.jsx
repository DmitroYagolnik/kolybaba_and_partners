import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import style from './NavItem.module.css';

const NavItem = ({ itemTitle, route, isHovered }) => {
  const { t } = useTranslation();
  const DropdownNavItemStyle = isHovered
    ? `${style.navItem} ${style.hoveredDropdown}`
    : style.navItem;
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
};

NavItem.propTypes = {
  itemTitle: PropTypes.string.isRequired,
  route: PropTypes.string,
  isHovered: PropTypes.bool,
};

export default NavItem;
