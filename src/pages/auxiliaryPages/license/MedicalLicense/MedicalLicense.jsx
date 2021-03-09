import React from 'react';
import { useTranslation } from 'react-i18next';
import PageImage from '../../../../img/PagesImage/MedicalLicense.jpg';

const MedicalLicense = () => {
  const { t } = useTranslation();
  return (
    <div className="content">
      <h2 className="page_services-title">
        {t('License.Medical_license-link')}
      </h2>
      <img
        className="page-image"
        src={PageImage}
        alt={t('MedicalLicense.PageImageAlt')}
      />
      <p className="page-text">
        <strong>{t('MedicalLicense.paragraph_1.part_1')}</strong>
        {t('MedicalLicense.paragraph_1.part_2')}
      </p>
      <p className="page-text">{t('MedicalLicense.paragraph_2')}</p>
      <p className="page-text">
        <strong>{t('MedicalLicense.paragraph_3')}</strong>
      </p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          {t('MedicalLicense.TextItem_1-1')}
        </li>
        <li className="page_text_list-item">
          {t('MedicalLicense.TextItem_1-2')}
        </li>
        <li className="page_text_list-item">
          {t('MedicalLicense.TextItem_1-3')}
        </li>
      </ul>
      <p className="page-text">{t('MedicalLicense.paragraph_4')}</p>
      <p className="page-text">{t('MedicalLicense.paragraph_5')}</p>
      <p className="page-text">
        <strong>{t('MedicalLicense.paragraph_6')}</strong>
      </p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          {t('MedicalLicense.TextItem_2-1')}
        </li>
        <li className="page_text_list-item">
          {t('MedicalLicense.TextItem_2-2')}
        </li>
        <li className="page_text_list-item">
          {t('MedicalLicense.TextItem_2-3')}
        </li>
        <li className="page_text_list-item">
          {t('MedicalLicense.TextItem_2-4')}
        </li>
        <li className="page_text_list-item">
          {t('MedicalLicense.TextItem_2-5')}
        </li>
      </ul>
      <p className="page-text">{t('MedicalLicense.paragraph_7')}</p>
      <p className="page-text">{t('MedicalLicense.paragraph_8')}</p>
    </div>
  );
};

export default MedicalLicense;
