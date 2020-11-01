import React from 'react';
import { useTranslation } from 'react-i18next';

const CategorizationOfAccommodationObjects = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2 className="page_services-title">
        {t('Certificate.Categorization_of_accommodation_objects-link')}
      </h2>
      <p className="page-text">
        {t('CategorizationOfAccommodationObjects.paragraph_1.part_1')}
        <a
          className="page_text-link"
          href="https://zakon.rada.gov.ua/laws/show/324/95-%D0%B2%D1%80#Text"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('CategorizationOfAccommodationObjects.paragraph_1.part_2')}
        </a>
        {t('CategorizationOfAccommodationObjects.paragraph_1.part_3')}
      </p>
      <p className="page-text">
        {t('CategorizationOfAccommodationObjects.paragraph_2.part_1')}
        <a
          className="page_text-link"
          href="https://zakon.rada.gov.ua/laws/show/803-2009-%D0%BF#Text"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('CategorizationOfAccommodationObjects.paragraph_2.part_2')}
        </a>
      </p>
      <p className="page-text">
        {t('CategorizationOfAccommodationObjects.paragraph_3')}
      </p>
    </>
  );
};

export default CategorizationOfAccommodationObjects;
