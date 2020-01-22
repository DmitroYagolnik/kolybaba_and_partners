import React from 'react';
import PropTypes from 'prop-types';
import WorkingHours from '../WorkingHours/WorkingHours';
import ContactInformation from '../ContactInformation/ContactInformation';
import logo from '../../img/Dandelion-logo.png';

const Header = ({ siteLanguage }) => {
  return (
    <header>
      <WorkingHours />
      <div className="logo-wrapper">
        <img src={logo} alt="Dandelion" className="logo-img" />
      </div>
      <ContactInformation />
    </header>
  );
};

Header.defaultProps = {
  siteLanguage: 'uk',
};

Header.propTypes = {
  siteLanguage: PropTypes.string,
};

export default Header;
