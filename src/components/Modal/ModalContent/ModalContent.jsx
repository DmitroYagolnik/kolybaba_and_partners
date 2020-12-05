import React from 'react';
import { useTranslation } from 'react-i18next';
import PhoneIcon from '@material-ui/icons/Phone';
import conversionPhoneNumber from '../../../servises/conversionPhoneNumber';
import contactInformation from '../../../servises/additionalInformation/contactInformation.json';
import style from './ModalContent.module.scss';

const ModalContent = () => {
  const { t } = useTranslation();
  return (
    <div className={style.ModalContent}>
      <h4 className={style.ModalContentTitle}>{t('ModalContent.Title')}</h4>
      <ul className={style.PhaneNumbersList}>
        {contactInformation.phone_numbers.map(elem => {
          return (
            <li key={elem} className={style.contactItem}>
              <a href={`tel:${elem}`} className={style.contactLink}>
                <PhoneIcon style={{ color: 'green', fontSize: 27 }} />
                <span>{conversionPhoneNumber(elem)}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ModalContent;
