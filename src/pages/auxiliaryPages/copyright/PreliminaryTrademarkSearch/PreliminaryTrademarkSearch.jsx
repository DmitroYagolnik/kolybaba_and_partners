import React from 'react';
import { useTranslation } from 'react-i18next';
import PageImage from '../../../../img/PagesImage/preliminary_trademark_search.jpg';

const PreliminaryTrademarkSearch = () => {
  const { t } = useTranslation();
  return (
    <div className="content">
      <h2 className="page_services-title">
        {t('Copyright.Preliminary_trademark_search-link')}
      </h2>
      <img
        className="page-image"
        src={PageImage}
        alt={t('PreliminaryTrademarkSearch.PageImageAlt')}
      />
      <p className="page-text">{t('PreliminaryTrademarkSearch.paragraph_1')}</p>
      <p className="page-text">{t('PreliminaryTrademarkSearch.paragraph_2')}</p>
      <p className="page-text">
        <strong>{t('PreliminaryTrademarkSearch.paragraph_3')}</strong>
      </p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          {t('PreliminaryTrademarkSearch.TextItem_1-1')}
        </li>
        <li className="page_text_list-item">
          {t('PreliminaryTrademarkSearch.TextItem_1-2')}
        </li>
        <li className="page_text_list-item">
          {t('PreliminaryTrademarkSearch.TextItem_1-3')}
        </li>
      </ul>
      <p className="page-text">
        <strong>{t('PreliminaryTrademarkSearch.paragraph_4')}</strong>
      </p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          {t('PreliminaryTrademarkSearch.TextItem_2-1')}
        </li>
        <li className="page_text_list-item">
          {t('PreliminaryTrademarkSearch.TextItem_2-2')}
        </li>
      </ul>
      <p className="page-text">
        <strong>{t('PreliminaryTrademarkSearch.paragraph_5')}</strong>
      </p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          {t('PreliminaryTrademarkSearch.TextItem_3-1')}
        </li>
        <li className="page_text_list-item">
          {t('PreliminaryTrademarkSearch.TextItem_3-2')}
        </li>
      </ul>
    </div>
  );
};

export default PreliminaryTrademarkSearch;
