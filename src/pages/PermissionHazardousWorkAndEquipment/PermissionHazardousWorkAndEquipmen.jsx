import React from 'react';
import { useTranslation } from 'react-i18next';

const PermissionHazardousWorkAndEquipmen = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2 className="page_services-title">
        {t('Occupational_health.Permission_hazardous_work_and_equipment-link')}
      </h2>
      <p className="page-text">
        {t('PermissionHazardousWorkAndEquipmen.paragraph_1.part_1')}
        <a
          className="page_text-link"
          href="https://zakon.rada.gov.ua/laws/main/2694-12"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('PermissionHazardousWorkAndEquipmen.paragraph_1.part_2')}
        </a>
        {t('PermissionHazardousWorkAndEquipmen.paragraph_1.part_3')}
      </p>
      <p className="page-text">
        {t('PermissionHazardousWorkAndEquipmen.paragraph_2.part_1')}
        <a
          className="page_text-link"
          href="https://zakon.rada.gov.ua/laws/show/1107-2011-%D0%BF"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('PermissionHazardousWorkAndEquipmen.paragraph_2.part_2')}
        </a>
        {t('PermissionHazardousWorkAndEquipmen.paragraph_2.part_3')}
      </p>
      <p className="page-text">
        {t('PermissionHazardousWorkAndEquipmen.paragraph_3')}
      </p>
      <p className="page-text">
        {t('PermissionHazardousWorkAndEquipmen.paragraph_4')}
      </p>
      <p className="page-text">
        <strong>{t('PermissionHazardousWorkAndEquipmen.paragraph_5')}</strong>
      </p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          {t('PermissionHazardousWorkAndEquipmen.TextItem_1-1')}
        </li>
        <li className="page_text_list-item">
          {t('PermissionHazardousWorkAndEquipmen.TextItem_1-2')}
        </li>
        <li className="page_text_list-item">
          {t('PermissionHazardousWorkAndEquipmen.TextItem_1-3')}
        </li>
        <li className="page_text_list-item">
          {t('PermissionHazardousWorkAndEquipmen.TextItem_1-4')}
        </li>
      </ul>
      <p className="page-text">
        <strong>{t('PermissionHazardousWorkAndEquipmen.paragraph_6')}</strong>
      </p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          {t('PermissionHazardousWorkAndEquipmen.TextItem_2-1')}
        </li>
        <li className="page_text_list-item">
          {t('PermissionHazardousWorkAndEquipmen.TextItem_2-2')}
        </li>
        <li className="page_text_list-item">
          {t('PermissionHazardousWorkAndEquipmen.TextItem_2-3')}
        </li>
        <li className="page_text_list-item">
          {t('PermissionHazardousWorkAndEquipmen.TextItem_2-4')}
        </li>
      </ul>
      <p className="page-text">
        {t('PermissionHazardousWorkAndEquipmen.paragraph_7')}
      </p>
      <p className="page-text">
        <strong>{t('PermissionHazardousWorkAndEquipmen.paragraph_8')}</strong>
      </p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          {t('PermissionHazardousWorkAndEquipmen.TextItem_3-1')}
        </li>
        <li className="page_text_list-item">
          {t('PermissionHazardousWorkAndEquipmen.TextItem_3-2')}
        </li>
        <li className="page_text_list-item">
          {t('PermissionHazardousWorkAndEquipmen.TextItem_3-3')}
        </li>
      </ul>
    </>
  );
};

export default PermissionHazardousWorkAndEquipmen;
