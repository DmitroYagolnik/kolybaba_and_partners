import React from 'react';
import { useTranslation } from 'react-i18next';

const TrademarkRegistrationAndProtection = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2 className="page_services-title">
        {t('Copyrighte_ISO.Trademark_registration_and_protection-link')}
      </h2>
      <p className="page-text">
        {t('TrademarkRegistrationAndProtection.paragraph_1')}
      </p>
      <p className="page-text">
        {t('TrademarkRegistrationAndProtection.paragraph_2.part_1')}
        <a
          className="page_text-link"
          href="https://zakon.rada.gov.ua/laws/show/3689-12#Text"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('TrademarkRegistrationAndProtection.paragraph_2.part_2')}
        </a>
        <strong>
          {t('TrademarkRegistrationAndProtection.paragraph_2.part_3')}
        </strong>
        {t('TrademarkRegistrationAndProtection.paragraph_2.part_4')}
      </p>
      <p className="page-text">
        {t('TrademarkRegistrationAndProtection.paragraph_3')}
      </p>
      <p className="page-text">
        {t('TrademarkRegistrationAndProtection.paragraph_4')}
      </p>
      <p className="page-text">
        {t('TrademarkRegistrationAndProtection.paragraph_5')}
      </p>
      <p className="page-text">
        {t('TrademarkRegistrationAndProtection.paragraph_6')}
      </p>
      <p className="page-text">
        {t('TrademarkRegistrationAndProtection.paragraph_7')}
      </p>
      <p className="page-text">
        <strong>{t('TrademarkRegistrationAndProtection.paragraph_8')}</strong>
      </p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          {t('TrademarkRegistrationAndProtection.TextItem_1-1')}
        </li>
        <li className="page_text_list-item">
          {t('TrademarkRegistrationAndProtection.TextItem_1-2')}
        </li>
      </ul>
      <p className="page-text">
        {t('TrademarkRegistrationAndProtection.paragraph_9')}
      </p>
      <p className="page-text">
        <strong>{t('TrademarkRegistrationAndProtection.paragraph_10')}</strong>
      </p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          {t('TrademarkRegistrationAndProtection.TextItem_2-1')}
        </li>
        <li className="page_text_list-item">
          {t('TrademarkRegistrationAndProtection.TextItem_2-2')}
        </li>
        <li className="page_text_list-item">
          {t('TrademarkRegistrationAndProtection.TextItem_2-3')}
        </li>
        <li className="page_text_list-item">
          {t('TrademarkRegistrationAndProtection.TextItem_2-4')}
        </li>
      </ul>
      <p className="page-text">
        {t('TrademarkRegistrationAndProtection.paragraph_11')}
      </p>
      <p className="page-text">
        {t('TrademarkRegistrationAndProtection.paragraph_12')}
      </p>
    </>
  );
};

export default TrademarkRegistrationAndProtection;
