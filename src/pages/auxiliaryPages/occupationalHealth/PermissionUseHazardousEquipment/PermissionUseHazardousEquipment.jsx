import React from 'react';
import { useTranslation } from 'react-i18next';

const PermissionUseHazardousEquipment = () => {
  const { t } = useTranslation();
  return (
    <div className="content">
      <h2 className="page_services-title">
        {t('Occupational_health.Permission_use_hazardous_equipment-link')}
      </h2>
      <p className="page-text">
        {t('PermissionUseHazardousEquipment.paragraph_1')}
      </p>
      <p className="page-text">
        {t('PermissionUseHazardousEquipment.paragraph_2.part_1')}
        <a
          className="page_text-link"
          href="https://zakon.rada.gov.ua/laws/show/1107-2011-%D0%BF"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('PermissionUseHazardousEquipment.paragraph_2.part_2')}
        </a>
        {t('PermissionUseHazardousEquipment.paragraph_2.part_3')}
      </p>
      <p className="page-text">
        <strong>{t('PermissionUseHazardousEquipment.paragraph_3')}</strong>
      </p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          {t('PermissionUseHazardousEquipment.TextItem_1-1')}
        </li>
        <li className="page_text_list-item">
          {t('PermissionUseHazardousEquipment.TextItem_1-2')}
        </li>
        <li className="page_text_list-item">
          {t('PermissionUseHazardousEquipment.TextItem_1-3')}
        </li>
      </ul>
      <p className="page-text">
        {t('PermissionUseHazardousEquipment.paragraph_4')}
      </p>
      <p className="page-text">
        {t('PermissionUseHazardousEquipment.paragraph_5')}
      </p>
      <p className="page-text">
        <strong>{t('PermissionUseHazardousEquipment.paragraph_6')}</strong>
      </p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          {t('PermissionUseHazardousEquipment.TextItem_2-1')}
        </li>
        <li className="page_text_list-item">
          {t('PermissionUseHazardousEquipment.TextItem_2-2')}
        </li>
        <li className="page_text_list-item">
          {t('PermissionUseHazardousEquipment.TextItem_2-3')}
        </li>
      </ul>
      <p className="page-text">
        {t('PermissionUseHazardousEquipment.paragraph_7')}
      </p>
    </div>
  );
};

export default PermissionUseHazardousEquipment;
