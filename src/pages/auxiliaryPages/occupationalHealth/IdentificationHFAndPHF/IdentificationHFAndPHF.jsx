import React from 'react';
import { useTranslation } from 'react-i18next';

const IdentificationHFAndPHF = () => {
  const { t } = useTranslation();
  return (
    <div className="content">
      <h2 className="page_services-title">
        {t('Occupational_health.Identification_HF_and_PHF-link')}
      </h2>
      <p className="page-text">
        {t('IdentificationHFAndPHF.paragraph_1.part_1')}
        <a
          className="page_text-link"
          href="https://zakon.rada.gov.ua/laws/show/2245-14"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('IdentificationHFAndPHF.paragraph_1.part_2')}
        </a>
        :
      </p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          <strong>{t('IdentificationHFAndPHF.TextItem_1-1.part_1')}</strong>
          {t('IdentificationHFAndPHF.TextItem_1-1.part_2')}
        </li>
        <li className="page_text_list-item">
          <strong>{t('IdentificationHFAndPHF.TextItem_1-2.part_1')}</strong>
          {t('IdentificationHFAndPHF.TextItem_1-2.part_2')}
        </li>
        <li className="page_text_list-item">
          <strong>{t('IdentificationHFAndPHF.TextItem_1-3.part_1')}</strong>
          {t('IdentificationHFAndPHF.TextItem_1-3.part_2')}
        </li>
      </ul>
      <p className="page-text">{t('IdentificationHFAndPHF.paragraph_2')}</p>
      <p className="page-text">{t('IdentificationHFAndPHF.paragraph_3')}</p>
      <p className="page-text">
        {t('IdentificationHFAndPHF.paragraph_4.part_1')}
        <a
          className="page_text-link"
          href="https://zakon.rada.gov.ua/laws/show/z0286-06"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('IdentificationHFAndPHF.paragraph_4.part_2')}
        </a>
      </p>
      <p className="page-text">
        {t('IdentificationHFAndPHF.paragraph_5.part_1')}
        <a
          className="page_text-link"
          href="https://zakon.rada.gov.ua/laws/show/956-2002-%D0%BF"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('IdentificationHFAndPHF.paragraph_5.part_2')}
        </a>
      </p>
      <p className="page-text">{t('IdentificationHFAndPHF.paragraph_6')}</p>
      <p className="page-text">{t('IdentificationHFAndPHF.paragraph_7')}</p>
      <p className="page-text">{t('IdentificationHFAndPHF.paragraph_8')}</p>
      <p className="page-text">{t('IdentificationHFAndPHF.paragraph_9')}</p>
      <p className="page-text">{t('IdentificationHFAndPHF.paragraph_10')}</p>
    </div>
  );
};

export default IdentificationHFAndPHF;
