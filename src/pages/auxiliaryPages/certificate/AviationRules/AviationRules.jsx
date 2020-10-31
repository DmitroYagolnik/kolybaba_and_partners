import React from 'react';
import { useTranslation } from 'react-i18next';

const AviationRules = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2 className="page_services-title">
        {t('Certificate.Aviation_rules-link')}
      </h2>
      <p className="page-text">{t('AviationRules.paragraph_1')}</p>
      <p className="page-text">
        <strong>{t('AviationRules.paragraph_2')}</strong>
      </p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          {t('AviationRules.TextItem_1-1')}
        </li>
        <li className="page_text_list-item">
          {t('AviationRules.TextItem_1-2')}
        </li>
        <li className="page_text_list-item">
          {t('AviationRules.TextItem_1-3')}
        </li>
        <li className="page_text_list-item">
          {t('AviationRules.TextItem_1-4')}
        </li>
        <li className="page_text_list-item">
          {t('AviationRules.TextItem_1-5')}
        </li>
      </ul>
      <p className="page-text">
        <strong>{t('AviationRules.paragraph_3')}</strong>
      </p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          {t('AviationRules.TextItem_2-1')}
        </li>
        <li className="page_text_list-item">
          {t('AviationRules.TextItem_2-2')}
        </li>
        <li className="page_text_list-item">
          {t('AviationRules.TextItem_2-3')}
        </li>
        <li className="page_text_list-item">
          {t('AviationRules.TextItem_2-4')}
        </li>
        <li className="page_text_list-item">
          {t('AviationRules.TextItem_2-5')}
        </li>
        <li className="page_text_list-item">
          {t('AviationRules.TextItem_2-6')}
        </li>
        <li className="page_text_list-item">
          {t('AviationRules.TextItem_2-7')}
        </li>
        <li className="page_text_list-item">
          {t('AviationRules.TextItem_2-8')}
        </li>
        <li className="page_text_list-item">
          {t('AviationRules.TextItem_2-9')}
        </li>
        <li className="page_text_list-item">
          {t('AviationRules.TextItem_2-10')}
        </li>
        <li className="page_text_list-item">
          {t('AviationRules.TextItem_2-11')}
        </li>
        <li className="page_text_list-item">
          {t('AviationRules.TextItem_2-12')}
        </li>
        <li className="page_text_list-item">
          {t('AviationRules.TextItem_2-13')}
        </li>
        <li className="page_text_list-item">
          {t('AviationRules.TextItem_2-14')}
        </li>
      </ul>
      <p className="page-text">{t('AviationRules.paragraph_4')}</p>
      <p className="page-text">{t('AviationRules.paragraph_5')}</p>
      <p className="page-text">{t('AviationRules.paragraph_6')}</p>
    </>
  );
};

export default AviationRules;
