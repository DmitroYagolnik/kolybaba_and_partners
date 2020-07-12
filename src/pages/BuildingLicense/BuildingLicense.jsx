import React from 'react';
import { useTranslation } from 'react-i18next';

const BuildingLicense = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2 className="page_services-title">
        {t('License.Building_license-link')}
      </h2>
      <p className="page-text">{t('BuildingLicense.paragraph_1')}</p>
      <p className="page-text">{t('BuildingLicense.paragraph_2')}</p>
      <p className="page-text">{t('BuildingLicense.paragraph_3')}</p>
      <p className="page-text">{t('BuildingLicense.paragraph_4')}</p>
      <table>
        <caption />
      </table>
    </>
  );
};

export default BuildingLicense;
