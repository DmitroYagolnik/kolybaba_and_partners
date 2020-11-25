import React from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import style from './ContactInformation.module.css';
import conversionPhoneNumber from '../../servises/conversionPhoneNumber';
import contactInformation from '../../servises/additionalInformation/contactInformation.json';

const ContactInformation = () => {
  return (
    <div className="contacts_information">
      <ul className={style.contactsList}>
        <li className={style.contactItem}>
          <MailOutlineIcon fontSize="small" />
          <span>{contactInformation.email}</span>
        </li>
        {contactInformation.phone_numbers.map(elem => {
          return (
            <li key={elem} className={style.contactItem}>
              <PhoneIcon fontSize="small" />
              <span>{conversionPhoneNumber(elem)}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactInformation;
