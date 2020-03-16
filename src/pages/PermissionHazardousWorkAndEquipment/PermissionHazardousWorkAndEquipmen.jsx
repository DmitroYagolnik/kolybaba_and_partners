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

// "PermissionUseHazardousEquipment.paragraph_1": "Дозвіл на застосування обладнання, підвищеної небезпеки, яке видається Державною Службою з питань праці (далі - Держпраці), є одним з ключових дозвільних документів, які необхідні підприємствам-виробникам такого обладнання, а також компаніям-дилерам, які продають (поширюють) обладнання підвищеної небезпеки на Україні.",
// "PermissionUseHazardousEquipment.paragraph_2.part_1": "Необхідність оформлення такого документа обумовлена",
// "PermissionUseHazardousEquipment.paragraph_2.part_2": "Постановою КМУ №1107 від 26.10.2011р. (Додаток 3)",
// "PermissionUseHazardousEquipment.paragraph_2.part_3": "визначено перелік устаткування підвищеної небезпеки. І без цього дозволу, використовувати таке обладнання заборонено. Дозвіл на застосування підтверджує відповідність обладнання, на яке видано, нормам і вимогам законодавства України в галузі охорони праці. Таким чином, імпортне обладнання також вимагає отримання Дозволу.",
// "PermissionUseHazardousEquipment.paragraph_3": "Дозвіл на застосування потрібно для:",
// "PermissionUseHazardousEquipment.TextItem_1-1": "замовників, які купують обладнання;",
// "PermissionUseHazardousEquipment.TextItem_1-2": "виконання тендерних умов;",
// "PermissionUseHazardousEquipment.TextItem_1-3": "отримання дозволу на експлуатацію.",
// "PermissionUseHazardousEquipment.paragraph_4": "Дозвіл безстроковий і оформляється за порівняно короткий термін. Для роботи, як правило, необхідна технічна документація.",
// "PermissionUseHazardousEquipment.paragraph_5": "Компанія «Dandelion» пропонує послуги з отримання Дозволу Держпраці, як у вигляді разових консультацій, так і супроводжуючи весь процес під ключ.",
// "PermissionUseHazardousEquipment.paragraph_6": "Ми допоможемо Вам:",
// "PermissionUseHazardousEquipment.TextItem_2-1": "правильно визначити роботи або обладнання;",
// "PermissionUseHazardousEquipment.TextItem_2-2": "підготуємо всю необхідну документацію;",
// "PermissionUseHazardousEquipment.TextItem_2-3": "здійснимо подачу-отримання документів.",
// "PermissionUseHazardousEquipment.paragraph_7": "Для початку роботи, потрібно визначиться з переліком робіт, або обладнання, і повідомити нам. Якщо ж Вам потрібна допомога у визначенні, зв'яжіться з нами за контактами, які Ви бачите на сайті і отримаєте безкоштовну консультацію."
