import React from 'react';
import { FormattedMessage } from 'react-intl';

const ContactInformation = () => {
  return (
    <div className="contacts_information">
      <ul className="contacts-list">
        <li className="contact-item">
          <img
            src="../src/img/email-icon.png"
            alt="Email"
            className="contact-icon"
          />
          Kulbaba_e@ukr.net
        </li>
        <li className="contact-item">
          <img
            src="../src/img/phone-icon.png"
            alt={
              <FormattedMessage
                id="PhoneNumber.icon_alt-text"
                defaultMessage="Номер телефону"
              />
            }
            className="contact-icon"
          />
          +38(099) 901-99-98
        </li>
        <li className="contact-item">
          <img
            src="../src/img/phone-icon.png"
            alt={
              <FormattedMessage
                id="PhoneNumber.icon_alt-text"
                defaultMessage="Номер телефону"
              />
            }
            className="contact-icon"
          />
          +38(098) 927-81-09
        </li>
      </ul>
    </div>
  );
};

export default ContactInformation;
