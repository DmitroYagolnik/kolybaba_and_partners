import React from 'react';
import { useTranslation } from 'react-i18next';
import PageImage from '../../../../img/PagesImage/refusal_letter.jpg';

const RefusalLetter = () => {
  const { t } = useTranslation();
  return (
    <div className="content">
      <h2 className="page_services-title">
        {t('Certificate.Refusal_letter-link')}
      </h2>
      <img
        className="page-image"
        src={PageImage}
        alt={t('RefusalLetter.PageImageAlt')}
      />
      <p className="page-text">{t('RefusalLetter.paragraph_1')}</p>
      <p className="page-text">{t('RefusalLetter.paragraph_2')}</p>
      <p className="page-text">{t('RefusalLetter.paragraph_3')}</p>
      <p className="page-text">{t('RefusalLetter.paragraph_4')}</p>
      <p className="page-text">{t('RefusalLetter.paragraph_5')}</p>
      <p className="page-text">{t('RefusalLetter.paragraph_6')}</p>
    </div>
  );
};

export default RefusalLetter;
