import React from 'react';
import { useTranslation } from 'react-i18next';

const PermissionUseHazardousEquipment = () => {
  const { t } = useTranslation();
  // "DeclarationMTB.paragraph_1": "Декларація відповідності матеріально технічної бази в Україні є обов'язковим офіційним державним документом, який підтверджує достовірність відповідності вимогам законодавства з охорони праці.",
  // "DeclarationMTB.paragraph_2.part_1": "Згідно з ",
  // "DeclarationMTB.paragraph_2.part_2": "постановою КМУ № 1107 від 26.10.2011 р.",
  // "DeclarationMTB.paragraph_2.part_3": "роботодавці незалежно від форми власності їх підприємства в разі виконання робіт підвищеної небезпеки та експлуатації машин і механізмів підвищеної небезпеки, зобов'язані оформити декларацію відповідності вимогам охорони праці.",
  // "DeclarationMTB.paragraph_3": "Додатком 6 і 7 передбачений вичерпний перелік небезпечних видів робіт, машин і механізмів при виконанні і експлуатації яких необхідно заповнити декларацію з охорони праці.",
  // "DeclarationMTB.paragraph_4": "Декларацією компанії декларують наявність компетентного персоналу, експлуатаційної документації, засобів індивідуального захисту, нормативного-правового та технічного забезпечення.",
  // "DeclarationMTB.paragraph_5": "Вона складається за встановленою формою (Додаток 8), і реєструється в територіальному управлінні Держпраці за місцем реєстрації підприємства.",
  // "DeclarationMTB.paragraph_6": "Компанія «Dandelion» здійснює послуги з компетентному складання, з подальшою реєстрацією в територіальному управлінні Держпраці Декларації МТБ. Також, у разі необхідності, ми здійснимо інші дії, такі як організація навчання, написання документації і т.п."
  // "AboutUs.TextItem_1.part_1": "Чесність перед клієнтом",
  // "AboutUs.TextItem_1.part_2": " - основа взаємовигідного співробітництва.",

  return (
    <>
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
        {t('PermissionUseHazardousEquipment.paragraph_3')}
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
        {t('PermissionUseHazardousEquipment.paragraph_6')}
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
    </>
  );
};

export default PermissionUseHazardousEquipment;
