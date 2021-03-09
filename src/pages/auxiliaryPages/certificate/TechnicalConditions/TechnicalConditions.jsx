import React from 'react';
import { useTranslation } from 'react-i18next';
import PageImage from '../../../../img/PagesImage/technical_conditions.jpg';

const TechnicalConditions = () => {
  const { t } = useTranslation();
  return (
    <div className="content">
      <h2 className="page_services-title">
        {t('Certificate.Technical_conditions-link')}
      </h2>
      <img
        className="page-image"
        src={PageImage}
        alt={t('TechnicalConditions.PageImageAlt')}
      />
      <p className="page-text">
        <strong>{t('TechnicalConditions.paragraph_1.part_1')}</strong>
        {t('TechnicalConditions.paragraph_1.part_2')}
      </p>
      <p className="page-text">{t('TechnicalConditions.paragraph_2')}</p>
      <p className="page-text">{t('TechnicalConditions.paragraph_3')}</p>
      <p className="page-text">{t('TechnicalConditions.paragraph_4')}</p>
      <p className="page-text">
        <strong>{t('TechnicalConditions.paragraph_5')}</strong>
      </p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          {t('TechnicalConditions.TextItem_1-1')}
        </li>
        <li className="page_text_list-item">
          {t('TechnicalConditions.TextItem_1-2')}
        </li>
        <li className="page_text_list-item">
          {t('TechnicalConditions.TextItem_1-3')}
        </li>
        <li className="page_text_list-item">
          {t('TechnicalConditions.TextItem_1-4')}
        </li>
      </ul>
      <p className="page-text">
        <strong>{t('TechnicalConditions.paragraph_6')}</strong>
      </p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          {t('TechnicalConditions.TextItem_2-1')}
        </li>
        <li className="page_text_list-item">
          {t('TechnicalConditions.TextItem_2-2')}
        </li>
        <li className="page_text_list-item">
          {t('TechnicalConditions.TextItem_2-3')}
        </li>
        <li className="page_text_list-item">
          {t('TechnicalConditions.TextItem_2-4')}
        </li>
      </ul>
    </div>
  );
};

export default TechnicalConditions;
