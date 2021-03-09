import React from 'react';
import { useTranslation } from 'react-i18next';
import PageImage from '../../../../img/PagesImage/sanitary-epidemiological_examination.jpg';

const SanitaryEpidemiologicalExamination = () => {
  const { t } = useTranslation();
  return (
    <div className="content">
      <h2 className="page_services-title">
        {t('Certificate.Sanitary-epidemiological_examination-link')}
      </h2>
      <img
        className="page-image"
        src={PageImage}
        alt={t('SanitaryEpidemiologicalExamination.PageImageAlt')}
      />
      <p className="page-text">
        {t('SanitaryEpidemiologicalExamination.paragraph_1')}
      </p>
      <p className="page-text">
        {t('SanitaryEpidemiologicalExamination.paragraph_2')}
      </p>
      <p className="page-text">
        {t('SanitaryEpidemiologicalExamination.paragraph_3')}
      </p>
    </div>
  );
};

export default SanitaryEpidemiologicalExamination;
