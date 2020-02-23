import React from 'react';
import { useTranslation } from 'react-i18next';

const SiteDescription = () => {
  const { t } = useTranslation();
  return (
    <h1 className="site_description-title">{t('SiteDescription.Title')}</h1>
  );
};

export default SiteDescription;
