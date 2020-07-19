import React from 'react';
import { useTranslation } from 'react-i18next';

const SiteDescription = () => {
  const { t } = useTranslation();
  return (
    <h2 className="site_description-title">{t('SiteDescription.Title')}</h2>
  );
};

export default SiteDescription;
