import React from 'react';
import { useTranslation } from 'react-i18next';

const IdentificationHFAndPHF = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2 className="page_services-title">
        {t('Occupational_health.Identification_HF_and_PHF-link')}
      </h2>
      <p className="page-text">
        {t('IdentificationHFAndPHF.paragraph_1.part_1')}
        <a
          className="page_text-link"
          href="https://zakon.rada.gov.ua/laws/show/2245-14"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('IdentificationHFAndPHF.paragraph_1.part_2')}
        </a>
        :
      </p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          <strong>{t('IdentificationHFAndPHF.TextItem_1-1.part_1')}</strong>
          {t('IdentificationHFAndPHF.TextItem_1-1.part_2')}
        </li>
        <li className="page_text_list-item">
          <strong>{t('IdentificationHFAndPHF.TextItem_1-2.part_1')}</strong>
          {t('IdentificationHFAndPHF.TextItem_1-2.part_2')}
        </li>
        <li className="page_text_list-item">
          <strong>{t('IdentificationHFAndPHF.TextItem_1-3.part_1')}</strong>
          {t('IdentificationHFAndPHF.TextItem_1-3.part_2')}
        </li>
      </ul>
      <p className="page-text">{t('IdentificationHFAndPHF.paragraph_2')}</p>
      <p className="page-text">{t('IdentificationHFAndPHF.paragraph_3')}</p>
      <p className="page-text">
        {t('IdentificationHFAndPHF.paragraph_4.part_1')}
        <a
          className="page_text-link"
          href="https://zakon.rada.gov.ua/laws/show/z0286-06"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('IdentificationHFAndPHF.paragraph_4.part_2')}
        </a>
      </p>
      <p className="page-text">
        {t('IdentificationHFAndPHF.paragraph_5.part_1')}
        <a
          className="page_text-link"
          href="https://zakon.rada.gov.ua/laws/show/956-2002-%D0%BF"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('IdentificationHFAndPHF.paragraph_5.part_2')}
        </a>
      </p>
      <p className="page-text">{t('IdentificationHFAndPHF.paragraph_6')}</p>
      <p className="page-text">{t('IdentificationHFAndPHF.paragraph_7')}</p>
      <p className="page-text">{t('IdentificationHFAndPHF.paragraph_8')}</p>
      <p className="page-text">{t('IdentificationHFAndPHF.paragraph_9')}</p>
      <p className="page-text">{t('IdentificationHFAndPHF.paragraph_10')}</p>
    </>
  );
};

export default IdentificationHFAndPHF;

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
