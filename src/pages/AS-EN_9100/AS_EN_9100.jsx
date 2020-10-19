import React from 'react';
import { useTranslation } from 'react-i18next';

const AS_EN_9100 = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2 className="page_services-title">
        {t('Certificate_ISO.Certificate_ISO_9001-link')}
      </h2>
      <p className="page-text">{t('CertificateISO9001.paragraph_1')}</p>
      <p className="page-text">{t('CertificateISO9001.paragraph_2')}</p>
      <p className="page-text">{t('CertificateISO9001.paragraph_3')}</p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          {t('CertificateISO9001.TextItem_1-1')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateISO9001.TextItem_1-2')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateISO9001.TextItem_1-3')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateISO9001.TextItem_1-4')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateISO9001.TextItem_1-5')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateISO9001.TextItem_1-6')}
        </li>
      </ul>
      <p className="page-text">{t('CertificateISO9001.paragraph_4')}</p>
      <p className="page-text">{t('CertificateISO9001.paragraph_5')}</p>
      <p className="page-text">{t('CertificateISO9001.paragraph_6')}</p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          {t('CertificateISO9001.TextItem_2-1')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateISO9001.TextItem_2-2')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateISO9001.TextItem_2-3')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateISO9001.TextItem_2-4')}
        </li>
      </ul>
    </>
  );
};

export default AS_EN_9100;
