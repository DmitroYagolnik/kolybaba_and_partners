import React from 'react';
import { useTranslation } from 'react-i18next';
import PageImage from '../../../../img/PagesImage/certificate_ce.jpg';

const CertificateCE = () => {
  const { t } = useTranslation();
  return (
    <div className="content">
      <h2 className="page_services-title">
        {t('Certificate.Certificate_CE-link')}
      </h2>
      <img
        className="page-image"
        src={PageImage}
        alt={t('CertificateCE.PageImageAlt')}
      />
      <p className="page-text">{t('CertificateCE.paragraph_1')}</p>
      <p className="page-text">{t('CertificateCE.paragraph_2')}</p>
      <p className="page-text">{t('CertificateCE.paragraph_3')}</p>
      <p className="page-text">{t('CertificateCE.paragraph_4')}</p>
      <p className="page-text">{t('CertificateCE.paragraph_5')}</p>
      <p className="page-text">{t('CertificateCE.paragraph_6')}</p>
      <p className="page-text">
        <strong>{t('CertificateCE.paragraph_7')}</strong>
      </p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          {t('CertificateCE.TextItem_1-1')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateCE.TextItem_1-2')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateCE.TextItem_1-3')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateCE.TextItem_1-4')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateCE.TextItem_1-5')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateCE.TextItem_1-6')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateCE.TextItem_1-7')}
        </li>
        <li className="page_text_list-item">
          {t('CertificateCE.TextItem_1-8')}
        </li>
      </ul>
    </div>
  );
};

export default CertificateCE;
