import React from 'react';
import { useTranslation } from 'react-i18next';
import SiteDescription from '../../../components/SiteDescription/SiteDescription';
import KulbabaFoto from '../../../img/Kulbaba-foto.png';
import contactInformation from '../../../servises/additionalInformation/contactInformation.json';

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div className="content">
      <SiteDescription />
      <img
        className="page-image"
        src={KulbabaFoto}
        alt={t('AboutUs.AboutUsPageFotoAlt')}
      />
      <p className="page-text">{t('AboutUs.paragraph_1')}</p>
      <p className="page-text">{t('AboutUs.paragraph_2')}</p>
      <p className="page-text">{t('AboutUs.paragraph_3')}</p>
      <p className="page-text">
        {t('AboutUs.paragraph_4.part_1')}
        <strong>{t('AboutUs.paragraph_4.part_2')}</strong>
        {t('AboutUs.paragraph_4.part_3')}
        <strong>{contactInformation.email}</strong>.
      </p>
      <p className="page-text">{t('AboutUs.paragraph_5')}</p>
      <ul className="page_text-list">
        <li className="page_text_list-item">
          <strong>{t('AboutUs.TextItem_1.part_1')}</strong>
          {t('AboutUs.TextItem_1.part_2')}
        </li>
        <li className="page_text_list-item">
          <strong>{t('AboutUs.TextItem_2.part_1')}</strong>
          {t('AboutUs.TextItem_2.part_2')}
        </li>
        <li className="page_text_list-item">
          <strong>{t('AboutUs.TextItem_3.part_1')}</strong>
          {t('AboutUs.TextItem_3.part_2')}
        </li>
        <li className="page_text_list-item">
          <strong>{t('AboutUs.TextItem_4.part_1')}</strong>
          {t('AboutUs.TextItem_4.part_2')}
        </li>
      </ul>
      <p className="page-text">{t('AboutUs.paragraph_6')}</p>
      <p className="page-text">{t('AboutUs.paragraph_7')}</p>
      <p className="page-text">
        {t('AboutUs.paragraph_8')} «Kolybaba & partners».
      </p>
    </div>
  );
};

export default AboutUs;
