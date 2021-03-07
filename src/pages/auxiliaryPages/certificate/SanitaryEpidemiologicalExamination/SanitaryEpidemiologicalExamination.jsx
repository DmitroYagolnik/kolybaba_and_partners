import React from 'react';
import { useTranslation } from 'react-i18next';

const SanitaryEpidemiologicalExamination = () => {
  const { t } = useTranslation();
  return (
    <div className="content">
      <h2 className="page_services-title">
        {t('Certificate.Sanitary-epidemiological_examination-link')}
      </h2>
      <p className="page-text">
        {t('SanitaryEpidemiologicalExamination.paragraph_1')}
      </p>
      <p className="page-text">
        {t('SanitaryEpidemiologicalExamination.paragraph_2')}
      </p>
    </div>
  );
};

export default SanitaryEpidemiologicalExamination;
