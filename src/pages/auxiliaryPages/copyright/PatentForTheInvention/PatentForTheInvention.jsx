import React from 'react';
import { useTranslation } from 'react-i18next';
import PageImage from '../../../../img/PagesImage/patent_for_the_invention.jpg';

const PatentForTheInvention = () => {
  const { t } = useTranslation();
  return (
    <div className="content">
      <h2 className="page_services-title">
        {t('Copyright.Patent_for_the_invention-link')}
      </h2>
      <img
        className="page-image"
        src={PageImage}
        alt={t('PatentForTheInvention.PageImageAlt')}
      />
      <p className="page-text">
        {t('PatentForTheInvention.paragraph_1.part_1')}
        <a
          className="page_text-link"
          href="https://zakon.rada.gov.ua/laws/main/3687-12#Text"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('PatentForTheInvention.paragraph_1.part_2')}
        </a>
        <strong>{t('PatentForTheInvention.paragraph_1.part_3')}</strong>
        {t('PatentForTheInvention.paragraph_1.part_4')}
      </p>
      <p className="page-text">{t('PatentForTheInvention.paragraph_2')}</p>
      <p className="page-text">{t('PatentForTheInvention.paragraph_3')}</p>
      <p className="page-text">{t('PatentForTheInvention.paragraph_4')}</p>
      <p className="page-text">
        <strong>{t('PatentForTheInvention.paragraph_5')}</strong>
      </p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          {t('PatentForTheInvention.TextItem_1-1')}
        </li>
        <li className="page_text_list-item">
          {t('PatentForTheInvention.TextItem_1-2')}
        </li>
      </ul>
      <p className="page-text">
        <strong>{t('PatentForTheInvention.paragraph_6')}</strong>
      </p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          {t('PatentForTheInvention.TextItem_2-1')}
        </li>
        <li className="page_text_list-item">
          {t('PatentForTheInvention.TextItem_2-2')}
        </li>
        <li className="page_text_list-item">
          {t('PatentForTheInvention.TextItem_2-3')}
        </li>
        <li className="page_text_list-item">
          {t('PatentForTheInvention.TextItem_2-4')}
        </li>
        <li className="page_text_list-item">
          {t('PatentForTheInvention.TextItem_2-5')}
        </li>
        <li className="page_text_list-item">
          {t('PatentForTheInvention.TextItem_2-6')}
        </li>
        <li className="page_text_list-item">
          {t('PatentForTheInvention.TextItem_2-7')}
        </li>
        <li className="page_text_list-item">
          {t('PatentForTheInvention.TextItem_2-8')}
        </li>
        <li className="page_text_list-item">
          {t('PatentForTheInvention.TextItem_2-9')}
        </li>
        <li className="page_text_list-item">
          {t('PatentForTheInvention.TextItem_2-10')}
        </li>
        <li className="page_text_list-item">
          {t('PatentForTheInvention.TextItem_2-11')}
        </li>
        <li className="page_text_list-item">
          {t('PatentForTheInvention.TextItem_2-12')}
        </li>
      </ul>
      <p className="page-text">
        <strong>{t('PatentForTheInvention.paragraph_7')}</strong>
      </p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          {t('PatentForTheInvention.TextItem_3-1')}
        </li>
        <li className="page_text_list-item">
          {t('PatentForTheInvention.TextItem_3-2')}
        </li>
        <li className="page_text_list-item">
          {t('PatentForTheInvention.TextItem_3-3')}
        </li>
        <li className="page_text_list-item">
          {t('PatentForTheInvention.TextItem_3-4')}
        </li>
        <li className="page_text_list-item">
          {t('PatentForTheInvention.TextItem_3-5')}
        </li>
        <li className="page_text_list-item">
          {t('PatentForTheInvention.TextItem_3-6')}
        </li>
        <li className="page_text_list-item">
          {t('PatentForTheInvention.TextItem_3-7')}
        </li>
        <li className="page_text_list-item">
          {t('PatentForTheInvention.TextItem_3-8')}
        </li>
        <li className="page_text_list-item">
          {t('PatentForTheInvention.TextItem_3-9')}
        </li>
        <li className="page_text_list-item">
          {t('PatentForTheInvention.TextItem_3-10')}
        </li>
      </ul>
      <p className="page-text">{t('PatentForTheInvention.paragraph_8')}</p>
      <h3>{t('PatentForTheInvention.subtitle_1')}</h3>
      <p className="page-text">{t('PatentForTheInvention.paragraph_9')}</p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          {t('PatentForTheInvention.TextItem_4-1')}
        </li>
        <li className="page_text_list-item">
          {t('PatentForTheInvention.TextItem_4-2')}
        </li>
        <li className="page_text_list-item">
          {t('PatentForTheInvention.TextItem_4-3')}
        </li>
      </ul>
      <p className="page-text">{t('PatentForTheInvention.paragraph_10')}</p>
      <p className="page-text">{t('PatentForTheInvention.paragraph_11')}</p>
      <p className="page-text">{t('PatentForTheInvention.paragraph_12')}</p>
      <p className="page-text">{t('PatentForTheInvention.paragraph_13')}</p>
    </div>
  );
};

export default PatentForTheInvention;
