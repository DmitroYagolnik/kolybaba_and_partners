import React from 'react';
import { useTranslation } from 'react-i18next';

const LicensePrecursors = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2 className="page_services-title">
        {t('License.License_precursors-link')}
      </h2>
      <p className="page-text">{t('LicensePrecursors.paragraph_1')}</p>
      <p className="page-text">{t('LicensePrecursors.paragraph_2')}</p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          <strong>{t('LicensePrecursors.TextItem_1-1.part_1')}</strong>
          {t('LicensePrecursors.TextItem_1-1.part_2')}
        </li>
        <li className="page_text_list-item">
          <strong>{t('LicensePrecursors.TextItem_1-2.part_1')}</strong>
          {t('LicensePrecursors.TextItem_1-2.part_2')}
        </li>
        <li className="page_text_list-item">
          <strong>{t('LicensePrecursors.TextItem_1-3.part_1')}</strong>
          {t('LicensePrecursors.TextItem_1-3.part_2')}
        </li>
        <li className="page_text_list-item">
          <strong>{t('LicensePrecursors.TextItem_1-4.part_1')}</strong>
          {t('LicensePrecursors.TextItem_1-4.part_2')}
        </li>
        <li className="page_text_list-item">
          <strong>{t('LicensePrecursors.TextItem_1-5.part_1')}</strong>
          {t('LicensePrecursors.TextItem_1-5.part_2')}
        </li>
        <li className="page_text_list-item">
          <strong>{t('LicensePrecursors.TextItem_1-6.part_1')}</strong>
          {t('LicensePrecursors.TextItem_1-6.part_2')}
        </li>
      </ul>
      <p className="page-text">{t('LicensePrecursors.paragraph_3')}</p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          {t('LicensePrecursors.TextItem_2-1')}
        </li>
        <li className="page_text_list-item">
          {t('LicensePrecursors.TextItem_2-2')}
        </li>
        <li className="page_text_list-item">
          {t('LicensePrecursors.TextItem_2-3')}
        </li>
      </ul>
      <p className="page_important_message-text">
        {t('LicensePrecursors.paragraph_4')}
      </p>
      <p className="page-text">{t('LicensePrecursors.paragraph_5')}</p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          {t('LicensePrecursors.TextItem_3-1')}
        </li>
        <li className="page_text_list-item">
          {t('LicensePrecursors.TextItem_3-2')}
        </li>
        <li className="page_text_list-item">
          {t('LicensePrecursors.TextItem_3-3')}
        </li>
      </ul>
      <p className="page-text">{t('LicensePrecursors.paragraph_6')}</p>
      <p className="page-text">{t('LicensePrecursors.paragraph_7')}</p>
    </>
  );
};

export default LicensePrecursors;
