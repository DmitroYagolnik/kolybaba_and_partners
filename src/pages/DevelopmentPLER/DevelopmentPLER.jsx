import React from 'react';
import { useTranslation } from 'react-i18next';

const DevelopmentPLER = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2 className="page_services-title">
        {t('Occupational_health.development_PLER-link')}
      </h2>
      <p className="page-text">{t('DevelopmentPLER.paragraph_1')}</p>
      <p className="page-text">{t('DevelopmentPLER.paragraph_2')}</p>
      <p className="page-text">{t('DevelopmentPLER.paragraph_3')}</p>
      <p className="page-text">{t('DevelopmentPLER.paragraph_4')}</p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          {t('DevelopmentPLER.TextItem_1-1')}
        </li>
        <li className="page_text_list-item">
          {t('DevelopmentPLER.TextItem_1-2')}
        </li>
        <li className="page_text_list-item">
          {t('DevelopmentPLER.TextItem_1-3')}
        </li>
        <li className="page_text_list-item">
          {t('DevelopmentPLER.TextItem_1-4')}
        </li>
      </ul>
      <p className="page-text">{t('DevelopmentPLER.paragraph_5')}</p>
      <p className="page-text">{t('DevelopmentPLER.paragraph_6')}</p>
      <p className="page-text">{t('DevelopmentPLER.paragraph_7')}</p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          {t('DevelopmentPLER.TextItem_2-1')}
        </li>
        <li className="page_text_list-item">
          {t('DevelopmentPLER.TextItem_2-2')}
        </li>
        <li className="page_text_list-item">
          {t('DevelopmentPLER.TextItem_2-3')}
        </li>
        <li className="page_text_list-item">
          {t('DevelopmentPLER.TextItem_2-4')}
        </li>
      </ul>
    </>
  );
};

export default DevelopmentPLER;
