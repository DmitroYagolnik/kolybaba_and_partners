import React from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import style from './ContactInformation.module.css';
import contactInformation from '../../additionalInformation/contactInformation.json';

const ContactInformation = () => {
  return (
    <div className="contacts_information">
      <ul className={style.contactsList}>
        <li className={style.contactItem}>
          <MailOutlineIcon fontSize="small" />
          <span>{contactInformation.email}</span>
        </li>
        <li className={style.contactItem}>
          <PhoneIcon fontSize="small" />
          <span>{contactInformation.phone_number_1}</span>
        </li>
        <li className={style.contactItem}>
          <PhoneIcon fontSize="small" />
          <span>{contactInformation.phone_number_2}</span>
        </li>
      </ul>
    </div>
  );
};

export default ContactInformation;
