/*
  Даний компонент призначений для того, щоб у "розумного" компоненту
  Modal можна було б використовувати бібліотеку i18n для кнопок.
*/
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { searchOptionsBtn } from './optionsBtn';
import style from './ModalButton.module.scss';

const ModalButton = ({ handleBtn, nameBtn }) => {
  const { t } = useTranslation();
  const optionBtn = searchOptionsBtn(nameBtn);
  const { typeBtn, labelBtn } = optionBtn;
  const classBtn = style[nameBtn];
  return (
    // Тип кнопки обирається з налаштувань які знаходяться в файлі optionsBtn.js
    // eslint-disable-next-line react/button-has-type
    <button type={typeBtn} onClick={handleBtn} className={classBtn}>
      {t(labelBtn)}
    </button>
  );
};

ModalButton.propTypes = {
  nameBtn: PropTypes.string.isRequired,
  handleBtn: PropTypes.func.isRequired,
};

export default ModalButton;
