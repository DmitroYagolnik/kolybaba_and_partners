import React from 'react';
import { useTranslation } from 'react-i18next';
import PageImage from '../../../../img/PagesImage/standard_AS_EN_9100.jpg';

const StandardASEN9100 = () => {
  const { t } = useTranslation();
  return (
    <div className="content">
      <h2 className="page_services-title">
        {t('Certificate_ISO.Standard_AS/EN_9100-link')}
      </h2>
      <img
        className="page-image"
        src={PageImage}
        alt={t('StandardASEN9100.PageImageAlt')}
      />
      <p className="page-text">{t('StandardASEN9100.paragraph_1')}</p>
      <p className="page-text">{t('StandardASEN9100.paragraph_2')}</p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          {t('StandardASEN9100.TextItem_1-1')}
        </li>
        <li className="page_text_list-item">
          {t('StandardASEN9100.TextItem_1-2')}
        </li>
        <li className="page_text_list-item">
          {t('StandardASEN9100.TextItem_1-3')}
        </li>
        <li className="page_text_list-item">
          {t('StandardASEN9100.TextItem_1-4')}
        </li>
        <li className="page_text_list-item">
          {t('StandardASEN9100.TextItem_1-5')}
        </li>
        <li className="page_text_list-item">
          {t('StandardASEN9100.TextItem_1-6')}
        </li>
        <li className="page_text_list-item">
          {t('StandardASEN9100.TextItem_1-7')}
        </li>
        <li className="page_text_list-item">
          {t('StandardASEN9100.TextItem_1-8')}
        </li>
        <li className="page_text_list-item">
          {t('StandardASEN9100.TextItem_1-9')}
        </li>
      </ul>
    </div>
  );
};

export default StandardASEN9100;
