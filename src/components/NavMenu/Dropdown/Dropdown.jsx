import React from 'react';
import PropTypes from 'prop-types';
import DropdownItem from '../DropdownItem/DropdownItem';
import style from './Dropdown.module.css';

const Dropdown = ({ updateStyleOption, services, closeDropdown }) => {
  return (
    <ul className={style.dropdown} style={updateStyleOption}>
      {services.map(({ servicePageName, routePage }) => {
        return (
          <DropdownItem
            key={routePage}
            servicePageName={servicePageName}
            routePage={routePage}
            closeDropdown={closeDropdown}
          />
        );
      })}
    </ul>
  );
};

Dropdown.defaultProps = {
  updateStyleOption: null,
};

Dropdown.propTypes = {
  updateStyleOption: PropTypes.shape({
    top: PropTypes.string,
    width: PropTypes.string,
  }),
  services: PropTypes.arrayOf(
    PropTypes.shape({
      routePage: PropTypes.string.isRequired,
      servicePageName: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  closeDropdown: PropTypes.func.isRequired,
};

export default Dropdown;
