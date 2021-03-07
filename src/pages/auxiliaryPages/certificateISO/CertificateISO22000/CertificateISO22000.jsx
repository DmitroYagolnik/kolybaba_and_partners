import React from 'react';
import { useTranslation } from 'react-i18next';

const CertificateISO22000 = () => {
  const { t } = useTranslation();
  return (
    <div className="content">
      <h2 className="page_services-title">
        {t('Certificate_ISO.Certificate_ISO_22000-link')}
      </h2>
      <p className="page-text">{t('CertificateISO22000.paragraph_1')}</p>
      <p className="page-text">{t('CertificateISO22000.paragraph_2')}</p>
      <p className="page-text">{t('CertificateISO22000.paragraph_3')}</p>
      <p className="page-text">{t('CertificateISO22000.paragraph_4')}</p>
      <p className="page-text">{t('CertificateISO22000.paragraph_5')}</p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          {t('CertificateISO22000.TextItem_1-1')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateISO22000.TextItem_1-2')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateISO22000.TextItem_1-3')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateISO22000.TextItem_1-4')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateISO22000.TextItem_1-5')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateISO22000.TextItem_1-6')}
        </li>
      </ul>
      <p className="page-text">{t('CertificateISO22000.paragraph_6')}</p>
      <p className="page-text">{t('CertificateISO22000.paragraph_7')}</p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          {t('CertificateISO22000.TextItem_2-1')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateISO22000.TextItem_2-2')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateISO22000.TextItem_2-3')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateISO22000.TextItem_2-4')}
        </li>
      </ul>
    </div>
  );
};

export default CertificateISO22000;
