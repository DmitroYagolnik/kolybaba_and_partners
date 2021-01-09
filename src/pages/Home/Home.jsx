import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import KulbabaFoto from '../../img/Kulbaba-foto.png';
import contactInformation from '../../servises/additionalInformation/contactInformation.json';
import catalogOfServices from '../../servises/additionalInformation/catalogOfServices';
import chooseImgIcon from '../../servises/chooseImgIcon';
import style from './Home.module.scss';

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div className="content">
      <h2 className="AboutUs_title">{t('HomePage.AboutUs.Title')}</h2>
      <section className="AboutUs">
        <img
          className="page-image"
          src={KulbabaFoto}
          alt={t('HomePage.AboutUs.AboutUsFotoAlt')}
        />
        <p className="page-text">{t('HomePage.AboutUs.paragraph_1')}</p>
        <p className="page-text">{t('HomePage.AboutUs.paragraph_2')}</p>
        <p className="page-text">{t('HomePage.AboutUs.paragraph_3')}</p>
        <p className="page-text">{t('HomePage.AboutUs.paragraph_4')}</p>
        <ul className="page_text-list">
          <li className="page_text_list-item">
            <strong>{t('HomePage.AboutUs.TextItem_1.part_1')}</strong>
            {t('HomePage.AboutUs.TextItem_1.part_2')}
          </li>
          <li className="page_text_list-item">
            <strong>{t('HomePage.AboutUs.TextItem_2.part_1')}</strong>
            {t('HomePage.AboutUs.TextItem_2.part_2')}
          </li>
          <li className="page_text_list-item">
            <strong>{t('HomePage.AboutUs.TextItem_3.part_1')}</strong>
            {t('HomePage.AboutUs.TextItem_3.part_2')}
          </li>
          <li className="page_text_list-item">
            <strong>{t('HomePage.AboutUs.TextItem_4.part_1')}</strong>
            {t('HomePage.AboutUs.TextItem_4.part_2')}
          </li>
        </ul>
        <p className="page-text">{t('HomePage.AboutUs.paragraph_5')}</p>
        <p className="page-text">{t('HomePage.AboutUs.paragraph_6')}</p>
        <p className="page-text">
          {t('HomePage.AboutUs.paragraph_7')} {contactInformation.company_name}.
        </p>
      </section>
      <section className="Services">
        <h2 className="Services_title">
          {t('HomePage.Services.Title')}
          {contactInformation.company_name}
        </h2>
        <p className="page-text">{t('HomePage.Services.paragraph_1')}</p>
        <p className="page-text">{t('HomePage.Services.paragraph_2')}</p>
        <div className={style.LinkServicesWrapper}>
          {catalogOfServices.map(({ typeServices, img, alt, services }) => {
            return (
              <article className={style.ServicesArticle} key={img}>
                <img
                  src={chooseImgIcon(img)}
                  alt={t(alt)}
                  className={style.ArticleIcon}
                />
                <h4 className={style.ArticleTitle}>{t(typeServices)}</h4>
                <ul className={style.LinkArticleList}>
                  {services.map(({ servicePageName, routePage }) => {
                    return (
                      <li key={routePage} className={style.LinkArticleListItem}>
                        <Link to={routePage}>{t(servicePageName)}</Link>
                      </li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </div>
        <p className="page-text">{t('HomePage.Services.paragraph_3')}</p>
      </section>
      {/* <ReactSVG src={ImgSVG} /> */}
    </div>
  );
};

export default HomePage;
