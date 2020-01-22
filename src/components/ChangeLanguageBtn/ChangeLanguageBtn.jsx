import React from 'react';
import PropTypes from 'prop-types';
import style from './ChangeLanguageBtn.module.css';

const ChangeLanguageBtn = ({ changeLanguage, siteLanguage }) => {
  const styleBtn =
    siteLanguage === 'uk' ? style.changeLanguageRu : style.changeLanguageUk;
  return <button type="button" onClick={changeLanguage} className={styleBtn} />;
};

ChangeLanguageBtn.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
  siteLanguage: PropTypes.string.isRequired,
};

export default ChangeLanguageBtn;
