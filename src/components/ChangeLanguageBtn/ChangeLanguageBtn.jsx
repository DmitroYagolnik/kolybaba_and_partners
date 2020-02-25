import React from 'react';
import PropTypes from 'prop-types';
import style from './ChangeLanguageBtn.module.css';

// const ChangeLanguageBtn = ({ changeLanguage, siteLanguage }) => {
//   const styleBtn =
//     siteLanguage === 'uk' ? style.changeLanguageRu : style.changeLanguageUk;
//   return <button type="button" onClick={changeLanguage} className={styleBtn} />;
// };

const ChangeLanguageBtn = ({ changeLanguage, siteLanguage }) => {
  const styleIndicatorUA =
    siteLanguage === 'uk' ? style.activeIndicator : style.passiveIndicator;
  const styleIndicatorRU =
    siteLanguage === 'ru' ? style.activeIndicator : style.passiveIndicator;
  return (
    <button
      type="button"
      onClick={changeLanguage}
      className={style.changeLanguageBtn}
    >
      <span className={styleIndicatorUA}>UA</span>/
      <span className={styleIndicatorRU}>RU</span>
    </button>
  );
};

ChangeLanguageBtn.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
  siteLanguage: PropTypes.string.isRequired,
};

export default ChangeLanguageBtn;
