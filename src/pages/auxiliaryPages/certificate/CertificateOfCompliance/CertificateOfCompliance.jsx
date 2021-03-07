import React from 'react';
import { useTranslation } from 'react-i18next';

const CertificateOfCompliance = () => {
  const { t } = useTranslation();
  return (
    <div className="content">
      <h2 className="page_services-title">
        {t('Certificate.Certificate_of_Compliance-link')}
      </h2>
      <p className="page-text">
        <strong>{t('CertificateOfCompliance.paragraph_1.part_1')}</strong>
        {t('CertificateOfCompliance.paragraph_1.part_2')}
      </p>
      <p className="page-text">
        <strong>{t('CertificateOfCompliance.paragraph_2')}</strong>
      </p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          {t('CertificateOfCompliance.TextItem_1-1')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateOfCompliance.TextItem_1-2')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateOfCompliance.TextItem_1-3')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateOfCompliance.TextItem_1-4')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateOfCompliance.TextItem_1-5')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateOfCompliance.TextItem_1-6')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateOfCompliance.TextItem_1-7')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateOfCompliance.TextItem_1-8')}
        </li>
      </ul>
      <p className="page_important_message-text">
        {t('CertificateOfCompliance.paragraph_3')}
      </p>
      <p className="page-text">
        <strong>{t('CertificateOfCompliance.paragraph_4')}</strong>
      </p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          {t('CertificateOfCompliance.TextItem_2-1')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateOfCompliance.TextItem_2-2')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateOfCompliance.TextItem_2-3')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateOfCompliance.TextItem_2-4')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateOfCompliance.TextItem_2-5')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateOfCompliance.TextItem_2-6')}
        </li>
      </ul>
    </div>
  );
};

export default CertificateOfCompliance;
