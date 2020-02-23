import React from 'react';
import { useTranslation } from 'react-i18next';
import WorkingHours from '../WorkingHours/WorkingHours';
import ContactInformation from '../ContactInformation/ContactInformation';
import style from './Footer.module.css';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <h3>{t('Footer.title')}</h3>
      <div className={style.contactsInformationWrapper}>
        <WorkingHours />
        <ContactInformation />
      </div>
    </footer>
  );
};

export default Footer;
