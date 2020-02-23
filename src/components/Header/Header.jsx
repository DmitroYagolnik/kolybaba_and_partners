import React from 'react';
import MediaQuery from 'react-responsive';
import WorkingHours from '../WorkingHours/WorkingHours';
import ContactInformation from '../ContactInformation/ContactInformation';
import style from './Header.module.css';
import logo from '../../img/Dandelion-logo.png';

const Header = () => {
  return (
    <header>
      <MediaQuery minDeviceWidth={600}>
        <WorkingHours />
      </MediaQuery>
      <img src={logo} alt="Dandelion" className={style.logoImg} />
      <MediaQuery minDeviceWidth={600}>
        <ContactInformation />
      </MediaQuery>
    </header>
  );
};

export default Header;
