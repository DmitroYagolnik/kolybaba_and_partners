import React from 'react';
import { useTranslation } from 'react-i18next';
import PageImage from '../../../../img/PagesImage/certificate_ISO_14001.jpg';

const CertificateISO14001 = () => {
  const { t } = useTranslation();
  return (
    <div className="content">
      <h2 className="page_services-title">
        {t('Certificate_ISO.Certificate_ISO_14001-link')}
      </h2>
      <img
        className="page-image"
        src={PageImage}
        alt={t('CertificateISO14001.PageImageAlt')}
      />
      <p className="page-text">{t('CertificateISO14001.paragraph_1')}</p>
      <p className="page-text">{t('CertificateISO14001.paragraph_2')}</p>
      <p className="page-text">{t('CertificateISO14001.paragraph_3')}</p>
      <p className="page-text">{t('CertificateISO14001.paragraph_4')}</p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          {t('CertificateISO14001.TextItem_1-1')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateISO14001.TextItem_1-2')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateISO14001.TextItem_1-3')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateISO14001.TextItem_1-4')}
        </li>
      </ul>
      <p className="page-text">{t('CertificateISO14001.paragraph_5')}</p>
      <p className="page-text">{t('CertificateISO14001.paragraph_6')}</p>
      <p className="page-text">{t('CertificateISO14001.paragraph_7')}</p>
      <p className="page-text">{t('CertificateISO14001.paragraph_8')}</p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          {t('CertificateISO14001.TextItem_2-1')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateISO14001.TextItem_2-2')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateISO14001.TextItem_2-3')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateISO14001.TextItem_2-4')}
        </li>
      </ul>
    </div>
  );
};

export default CertificateISO14001;
