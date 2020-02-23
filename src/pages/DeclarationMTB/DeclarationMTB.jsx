import React from 'react';
import { useTranslation } from 'react-i18next';

const DeclarationMTB = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2 className="page_services-title">
        {t('DeclarationMTB.Page_services-title')}
      </h2>
      <p className="page-text">{t('DeclarationMTB.paragraph_1')}</p>
      <p className="page-text">
        {t('DeclarationMTB.paragraph_2.part_1')}
        <a
          className="page_text-link"
          href="https://zakon.rada.gov.ua/laws/show/1107-2011-%D0%BF"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('DeclarationMTB.paragraph_2.part_2')}
        </a>
        {t('DeclarationMTB.paragraph_2.part_3')}
      </p>
      <p className="page-text">{t('DeclarationMTB.paragraph_3')}</p>
      <p className="page-text">{t('DeclarationMTB.paragraph_4')}</p>
      <p className="page-text">{t('DeclarationMTB.paragraph_5')}</p>
      <p className="page-text">{t('DeclarationMTB.paragraph_6')}</p>
    </>
  );
};

export default DeclarationMTB;
