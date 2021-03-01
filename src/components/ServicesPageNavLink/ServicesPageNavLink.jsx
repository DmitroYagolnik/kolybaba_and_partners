import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import catalogOfServices from '../../servises/additionalInformation/catalogOfServices/catalogOfServices';
import chooseImgIcon from '../../servises/chooseImgIcon';
import style from './ServicesPageNavLink.module.css';

const ServicesPageNavLink = ({ hasImg, isNavLink }) => {
  const { t } = useTranslation();
  const ServicesWrapperStyle = isNavLink
    ? style.NavLinkServicesWrapper
    : style.LinkServicesWrapper;
  const TypeServicesArticle = isNavLink
    ? style.NavLinkTypeServicesArticle
    : style.LinkTypeServicesArticle;

  return (
    <div className={ServicesWrapperStyle}>
      {catalogOfServices.map(({ typeServices, img, alt, services }) => {
        return (
          <article className={TypeServicesArticle} key={img}>
            {hasImg && (
              <img
                src={chooseImgIcon(img)}
                alt={t(alt)}
                className={style.LinkArticleIcon}
              />
            )}
            <h4 className={style.LinkArticleTitle}>{t(typeServices)}</h4>
            <ul className={style.LinkArticleList}>
              {services.map(({ servicePageName, routePage }) => {
                return (
                  <li key={routePage} className={style.LinkArticleListItem}>
                    {isNavLink ? (
                      <NavLink to={routePage}>{t(servicePageName)}</NavLink>
                    ) : (
                      <Link to={routePage}>{t(servicePageName)}</Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </article>
        );
      })}
    </div>
  );
};

ServicesPageNavLink.defaultProps = {
  hasImg: false,
  isNavLink: false,
};

ServicesPageNavLink.propTypes = {
  hasImg: PropTypes.bool,
  isNavLink: PropTypes.bool,
};

export default ServicesPageNavLink;
